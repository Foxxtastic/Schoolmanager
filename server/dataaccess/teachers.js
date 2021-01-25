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

    result = { ...item, majors: majorsByTeacherId[item.Id.toString()] }

    return {
        item: result
    }
}

async function listAllTeachers(sortingProperty = 'Id', isAscending = true, filterProperty = 'FirstName', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
    with teachersWithRowNum AS
        (
            select
                t.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, UserId,
                row_number() over(
                    order by
                        case ${sortingProperty}
                            when 'Id'                   then convert(nvarchar(max), t.Id)
                            when 'FirstName'            then convert(nvarchar(max), FirstName)
                            when 'LastName'             then convert(nvarchar(max), LastName)
                            when 'BirthDate'            then convert(nvarchar(max), BirthDate)
                            when 'Nationality'          then convert(nvarchar(max), Nationality)
                            when 'SecondNationality'    then convert(nvarchar(max), SecondNationality)
                            when 'City'                 then convert(nvarchar(max), City)
                            when 'Address'              then convert(nvarchar(max), Address)
                        end
                ) as RowNum
            from 
                Teachers t
                inner join Persons p on t.PersonId = p.Id   
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
        select mt.TeacherId, mt.MajorId, m.Name
            from MajorTeacher mt
            inner join Majors m
            on m.Id = mt.MajorId`;

    const majorsByTeacherId = convertToList(majors.recordset);

    let items = result.recordset.map(x => ({ ...x, majors: majorsByTeacherId[x.Id.toString()] }))

    return {
        items,
        allItemsCount: result.recordset.length
    };
}

async function listPaged(pageNumber, pageSize, sortingProperty = 'Id', isAscending = true, filterProperty = 'FirstName', filter = '') {
    await sql.connect(databaseConnection);
    const offset = (pageNumber === '0') ? 0 : (pageNumber - 1) * pageSize;
    const pageSizeAsNumber = parseInt(pageSize, 10);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const pageResult = await sql.query`
        with teachersWithRowNum AS
        (
            select
                t.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, UserId,
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
                            when 'City'                 then convert(nvarchar(max), City)
                            when 'Address'              then convert(nvarchar(max), Address)
                        end
                ) as RowNum
            from 
                Teachers t
                inner join Persons p on t.PersonId = p.Id
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
            select t.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address
            from
                Teachers t
                inner join Persons p
                on t.PersonId = p.Id
            where 
                case ${filterProperty}
                    when 'Id'                   then convert(nvarchar(max), t.Id)
                    when 'FirstName'            then convert(nvarchar(max), FirstName)
                    when 'LastName'             then convert(nvarchar(max), LastName)
                    when 'BirthDate'            then convert(nvarchar(max), BirthDate)
                    when 'Nationality'          then convert(nvarchar(max), Nationality)
                    when 'SecondNationality'    then convert(nvarchar(max), SecondNationality)
                    when 'City'                 then convert(nvarchar(max), City)
                    when 'Address'              then convert(nvarchar(max), Address)
                end
                like '%' + ${filter} +'%'
        )
        select count(*) as Count
        from teachersWithFilter`;

    const count = countResult.recordset[0].Count;
    const teacherIdList = pageResult.recordset.map(x => x.Id);

    const majors = await sql.query`
    select t.Id as TeacherId, m.Id as MajorId, m.Name as MajorName
        from
 	    Teachers t
 	    inner join MajorTeacher mt on mt.TeacherId = t.Id
 	    inner join Majors m on m.Id = mt.MajorId
        where t.Id in (${teacherIdList})`;

    const majorsByTeacherId = convertToList(majors.recordset);
    let items = pageResult.recordset.map(x => ({ ...x, majors: majorsByTeacherId[x.Id.toString()] }))

    return {
        items,
        allItemsCount: count
    };
}

async function createTeacher(teacherDto) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
    insert into Users(EmailAddress, PasswordHash, IsActive, LastLogin)
    values(
        ${teacherDto.EmailAddress},
        HASHBYTES('SHA2_512', '${teacherDto.Password}'),
        ${teacherDto.IsActive},
        ${teacherDto.LastLogin});

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

    insert into Teachers(PersonId)
    select p.Id
    from
    Persons p
    inner join Users u on u.id = p.UserId
    where u.EmailAddress = ${teacherDto.EmailAddress}; `;

    result = await sql.query`
    select top 1 Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address
    from
    Teachers t
    inner join Persons p on p.id = t.PersonId
    order by Id desc`;

    return result.recordset;
}

async function updateTeacher(id, personDto) {
    const person = await getTeacherById(id);

    if (person === undefined) {
        const error = new Error(`No Person with Id = ${id} !`);
        error.status = 404;
        throw error;
    }

    await sql.connect(databaseConnection);

    result = await sql.query`
    update Persons
    set
    FirstName = ${personDto.FirstName},
    LastName = ${personDto.LastName},
    BirthDate = ${personDto.BirthDate},
    Nationality = ${personDto.Nationality},
    SecondNationality = ${personDto.SecondNationality},
    City = ${personDto.City},
    Address = ${personDto.Address}
    where
    Id = ${id} `;

    return await getTeacherById(id);
}

async function deleteById(personId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
    delete
        from Persons
    where Id = ${personId} `;

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`No Person with Id = ${personId} !`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    getTeacherById,
    listAllTeachers,
    listPaged,
    createTeacher,
    deleteById,
    updateTeacher
}