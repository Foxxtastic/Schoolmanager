const sql = require('mssql');
const { databaseConnection } = require('../config');

function convertToList(array) {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        let key = array[i].TeacherId.toString();
        let obj = { MajorId: array[i].MajorId, MajorName: array[i].MajorName };
        if (!result.hasOwnProperty(key)) {
            result[key] = [obj];
        }
        else {
            result[key].push(obj);
        }
    }
    return result;
}

async function getTeacherById(teacherId) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
    select t.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, UserId
    from
        Teachers t
        inner join Persons p on t.PersonId = p.Id
    where t.Id = ${teacherId}`;

    const majors = await sql.query`
    select t.Id as TeacherId, m.Id as MajorId, m.Name as MajorName
        from
 	    Teachers t
 	    inner join MajorTeacher mt on mt.TeacherId = t.Id
 	    inner join Majors m on m.Id = mt.MajorId
        where t.Id =${teacherId}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    if (result.recordset.length !== 1) {
        throw new Error(`More than one record with Id ${teacherId} `)
    }

    const majorsByTeacherId = convertToList(majors.recordset);
    const item = result.recordset[0];

    return {
        ...item,
        Majors: majorsByTeacherId[item.Id.toString()]
    };
}

async function getTeachersWithoutSchool() {
    await sql.connect(databaseConnection);
    let result = await sql.query`
        select t.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address
            from Persons p
            inner join Teachers t on t.PersonId = p.Id
            left outer join SchoolTeacher st on st.TeacherId = t.Id
        where st.SchoolId is null`

    const count = result.recordset.length;
    const teacherIdList = result.recordset.map(x => x.Id);

    let items = [];

    if (teacherIdList.length !== 0) {
        const majors = await sql.query`
            select t.Id as TeacherId, m.Id as MajorId, m.Name as MajorName
                from
                 Teachers t
                 inner join MajorTeacher mt on mt.TeacherId = t.Id
                 inner join Majors m on m.Id = mt.MajorId
                where t.Id in (${teacherIdList})`;

        const majorsByTeacherId = convertToList(majors.recordset);
        items = result.recordset.map(x => ({ ...x, Majors: majorsByTeacherId[x.Id.toString()] }));
    }

    return {
        items,
        allItemsCount: count
    };
}

async function listAllTeachers(sortingProperty = 'Id', isAscending = true, filterProperty = 'FirstName', filter = '', schoolId = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
    with teachersWithRowNum AS
        (
            select
                t.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, p.City, p.Address, UserId,
                row_number() over(
                    order by
                        case ${sortingProperty}
                            when 'Id'                   then convert(nvarchar(max), t.Id)
                            when 'FirstName'            then convert(nvarchar(max), FirstName)
                            when 'LastName'             then convert(nvarchar(max), LastName)
                            when 'BirthDate'            then convert(nvarchar(max), BirthDate)
                            when 'Nationality'          then convert(nvarchar(max), Nationality)
                            when 'SecondNationality'    then convert(nvarchar(max), SecondNationality)
                            when 'City'                 then convert(nvarchar(max), p.City)
                            when 'Address'              then convert(nvarchar(max), p.Address)
                        end
                ) as RowNum
            from 
                Persons p
                inner join Teachers t on t.PersonId = p.Id
                inner join SchoolTeacher st on st.TeacherId = t.Id
                inner join Schools sc on sc.Id = st.SchoolId
                where ${schoolId} = '' and sc.Id in (select Id from Schools)
                    or ${schoolId} != '' and sc.Id in (${schoolId})
        )
    select Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address
    from
        teachersWithRowNum
    where 
        case ${filterProperty}
            when 'Id'                   then convert(nvarchar(max), Id)
            when 'FirstName'            then convert(nvarchar(max), FirstName)
            when 'LastName'             then convert(nvarchar(max), LastName)
            when 'BirthDate'            then convert(nvarchar(max), BirthDate)
            when 'Nationality'          then convert(nvarchar(max), Nationality)
            when 'SecondNationality'    then convert(nvarchar(max), SecondNationality)
            when 'City'                 then convert(nvarchar(max), City)
            when 'Address'              then convert(nvarchar(max), Address)
        end
        like '%' + ${filter} +'%'
    order by
        RowNum * ${isAscendingParam} `;

    const majors = await sql.query`
        select mt.TeacherId, mt.MajorId, m.Name as MajorName
            from MajorTeacher mt
            inner join Majors m on m.Id = mt.MajorId`;

    const majorsByTeacherId = convertToList(majors.recordset);

    let items = result.recordset.map(x => ({ ...x, Majors: majorsByTeacherId[x.Id.toString()] }))

    return {
        items,
        allItemsCount: result.recordset.length
    };
}

async function listPaged(pageNumber, pageSize, sortingProperty = 'Id', isAscending = true, filterProperty = 'FirstName', filter = '', schoolId) {
    await sql.connect(databaseConnection);
    const offset = (pageNumber === '0') ? 0 : (pageNumber - 1) * pageSize;
    const pageSizeAsNumber = parseInt(pageSize, 10);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const pageResult = await sql.query`
        with teachersWithRowNum AS
        (
            select
                t.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, p.City, p.Address, UserId,
                row_number() over
                (
                    order by
                        case ${sortingProperty}
                            when 'Id'                   then convert(nvarchar(max), t.Id)
                            when 'FirstName'            then convert(nvarchar(max), FirstName)
                            when 'LastName'             then convert(nvarchar(max), LastName)
                            when 'BirthDate'            then convert(nvarchar(max), BirthDate)
                            when 'Nationality'          then convert(nvarchar(max), Nationality)
                            when 'SecondNationality'    then convert(nvarchar(max), SecondNationality)
                            when 'City'                 then convert(nvarchar(max), p.City)
                            when 'Address'              then convert(nvarchar(max), p.Address)
                        end
                ) as RowNum
            from 
                Persons p
                    inner join Teachers t on t.PersonId = p.Id
                    inner join SchoolTeacher st on st.TeacherId = t.Id
                    inner join Schools sc on sc.Id = st.SchoolId
                where ${schoolId} = '' and sc.Id in (select Id from Schools)
                    or ${schoolId} != '' and sc.Id in (${schoolId})
        )
        select Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address
        from
            teachersWithRowNum
        where 
            case ${filterProperty}
                when 'Id'                   then convert(nvarchar(max), Id)
                when 'FirstName'            then convert(nvarchar(max), FirstName)
                when 'LastName'             then convert(nvarchar(max), LastName)
                when 'BirthDate'            then convert(nvarchar(max), BirthDate)
                when 'Nationality'          then convert(nvarchar(max), Nationality)
                when 'SecondNationality'    then convert(nvarchar(max), SecondNationality)
                when 'City'                 then convert(nvarchar(max), City)
                when 'Address'              then convert(nvarchar(max), Address)
            end
            like '%' + ${filter} +'%'
        order by
            RowNum * ${isAscendingParam}
        offset ${offset} rows
        fetch next ${pageSizeAsNumber} rows only; `;

    const countResult = await sql.query`
        with teachersWithFilter as
        (
            select t.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, p.City, p.Address
            from
                Persons p
                    inner join Teachers t on t.PersonId = p.Id
                    inner join SchoolTeacher st on st.TeacherId = t.Id
                    inner join Schools sc on sc.Id = st.SchoolId
            where 
                case ${filterProperty}
                    when 'Id'                   then convert(nvarchar(max), t.Id)
                    when 'FirstName'            then convert(nvarchar(max), FirstName)
                    when 'LastName'             then convert(nvarchar(max), LastName)
                    when 'BirthDate'            then convert(nvarchar(max), BirthDate)
                    when 'Nationality'          then convert(nvarchar(max), Nationality)
                    when 'SecondNationality'    then convert(nvarchar(max), SecondNationality)
                    when 'City'                 then convert(nvarchar(max), p.City)
                    when 'Address'              then convert(nvarchar(max), p.Address)
                end
                like '%'+${filter}+'%' and ${schoolId} = '' and sc.Id in (select Id from Schools)
                    or ${schoolId} != '' and sc.Id in (${schoolId})
        )
        select count(*) as Count
        from teachersWithFilter`;

    const count = countResult.recordset[0].Count;
    const teacherIdList = pageResult.recordset.map(x => x.Id);

    let items = [];

    if (teacherIdList.length !== 0) {
        const majors = await sql.query`
                select t.Id as TeacherId, m.Id as MajorId, m.Name as MajorName
                    from Teachers t
 	                    inner join MajorTeacher mt on mt.TeacherId = t.Id
 	                    inner join Majors m on m.Id = mt.MajorId
                where t.Id in (${teacherIdList})`;

        const majorsByTeacherId = convertToList(majors.recordset);
        items = pageResult.recordset.map(x => ({ ...x, Majors: majorsByTeacherId[x.Id.toString()] }))
    }

    return {
        items,
        allItemsCount: count
    };
}

async function createTeacher(teacherDto) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
        insert into Users(EmailAddress, PasswordHash, IsActive, LastLogin)
        values
        (
            ${teacherDto.EmailAddress},
            HASHBYTES('SHA2_512', '${teacherDto.Password}'),
            ${teacherDto.IsActive},
            null
        );
        insert into Persons(FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, UserId)
        select
            ${teacherDto.FirstName},
            ${teacherDto.LastName},
            ${teacherDto.BirthDate},
            ${teacherDto.Nationality},
            ${teacherDto.SecondNationality},
            ${teacherDto.City},
            ${teacherDto.Address},
            Id
                from Users
                where EmailAddress = ${teacherDto.EmailAddress};

        declare @id int
            set @id = 
            (
                select top 1 p.Id
                    from Persons p
                order by p.Id desc
            );
        
        insert into Teachers(PersonId)
            select @id;`;

    let teacherId = await sql.query`
        select t.Id
            from Persons p
            inner join Users u on u.Id = p.UserId
            inner join Teachers t on t.PersonId = p.Id
        where u.EmailAddress = ${teacherDto.EmailAddress}`

    teacherId = teacherId.recordset[0].Id

    for (let i = 0; i < teacherDto.Majors.length; i++) {
        result = await sql.query`
            insert into MajorTeacher
            select ${teacherDto.Majors[i].Id}, ${teacherId}`;
    }

    result = await sql.query`
        select top 1 t.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address
        from Teachers t
            inner join Persons p on p.id = t.PersonId
            order by Id desc`;

    return result.recordset;
}

async function updateTeacher(id, teacherDto) {
    const teacher = await getTeacherById(id);

    if (teacher === undefined) {
        const error = new Error(`No Teacher with Id = ${id} !`);
        error.status = 404;
        throw error;
    }

    await sql.connect(databaseConnection);

    result = await sql.query`
        declare @id int
            set @id = 
            (
                select p.Id
                    from Persons p
                    inner join Teachers t on t.PersonId = p.Id
                where t.Id = ${id}
            );

        update Persons
            set
                FirstName = ${teacherDto.FirstName},
                LastName = ${teacherDto.LastName},
                BirthDate = ${teacherDto.BirthDate},
                Nationality = ${teacherDto.Nationality},
                SecondNationality = ${teacherDto.SecondNationality},
                City = ${teacherDto.City},
                Address = ${teacherDto.Address}
        where Id = @id;
        
        delete
            from MajorTeacher
        where TeacherId = ${id};`;

    for (let i = 0; i < teacherDto.Majors.length; i++) {
        result = await sql.query`
            insert into MajorTeacher
            select ${teacherDto.Majors[i].Id}, ${id}`;
    }

    return await getTeacherById(id);
}

async function deleteById(teacherId) {
    await sql.connect(databaseConnection);
    const personAndUserId = await sql.query`
        select t.PersonId, p.UserId
            from Teachers t
                inner join Persons p
                on t.PersonId = p.Id
        where t.Id = ${teacherId};`

    const personId = personAndUserId.recordset[0].PersonId;
    const userId = personAndUserId.recordset[0].UserId;

    const result = await sql.query`
        delete
            from SchoolTeachers
        where TeacherId = ${teacherId}
    
        delete
            from MajorTeacher
        where TeacherId = ${teacherId};

        delete
            from Teachers
        where Id = ${teacherId};

        delete
            from Persons
        where Id = ${personId};

        delete 
            from Users
        where Id = ${userId};`

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`No Teacher with Id = ${Id} !`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    getTeacherById,
    getTeachersWithoutSchool,
    listAllTeachers,
    listPaged,
    createTeacher,
    deleteById,
    updateTeacher
}