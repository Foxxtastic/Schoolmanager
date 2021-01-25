const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getStudentById(studentId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select p.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, s.StartDate, s.ActiveStatus
            from Persons p
            inner join Students s on p.Id = s.PersonId
        where s.Id = ${studentId};`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    if (result.recordset.length !== 1) {
        throw new Error(`More than one record with Id ${studentId}`)
    }

    return result.recordset[0];
}

async function listAllStudents(sortingProperty = 'Id', isAscending = true, filterProperty = 'FirstName', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
        with studentsWithRowNum AS
        (
            select
                s.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, StartDate, ActiveStatus,
                row_number() over 
                (
                    order by
                    case ${sortingProperty}
                        when 'Id'                   then convert(nvarchar(max), s.Id)
                        when 'FirstName'            then convert(nvarchar(max), FirstName)
                        when 'LastName'             then convert(nvarchar(max), LastName)
                        when 'BirthDate'            then convert(nvarchar(max), BirthDate)
                        when 'Nationality'          then convert(nvarchar(max), Nationality)
                        when 'SecondNationality'    then convert(nvarchar(max), SecondNationality)
                        when 'City'                 then convert(nvarchar(max), City)
                        when 'Address'              then convert(nvarchar(max), Address)
                        when 'StartDate'            then convert(nvarchar(max), StartDate)
                        when 'ActiveStatus'         then convert(nvarchar(max), ActiveStatus)
                    end
                ) as RowNum
            from
                Persons p
                inner join Students s on p.Id = s.PersonId
        )
        select Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, StartDate, ActiveStatus
        from
            studentsWithRowNum
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
                when 'StartDate'            then convert(nvarchar(max), StartDate)
                when 'ActiveStatus'         then convert(nvarchar(max), ActiveStatus)
            end
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam};`;

    return {
        items: result.recordset,
        allItemsCount: result.recordset.length
    };
}

async function listPaged(pageNumber, pageSize, sortingProperty = 'Id', isAscending = true, filterProperty = 'FirstName', filter = '') {
    await sql.connect(databaseConnection);
    const offset = (pageNumber === '0') ? 0 : (pageNumber - 1) * pageSize;
    const pageSizeAsNumber = parseInt(pageSize, 10);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const pageResult = await sql.query`
    with studentsWithRowNum AS
        (
            select
                s.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, StartDate, ActiveStatus,
                row_number() over 
                (
                    order by
                    case ${sortingProperty}
                        when 'Id'                   then convert(nvarchar(max), s.Id)
                        when 'FirstName'            then convert(nvarchar(max), FirstName)
                        when 'LastName'             then convert(nvarchar(max), LastName)
                        when 'BirthDate'            then convert(nvarchar(max), BirthDate)
                        when 'Nationality'          then convert(nvarchar(max), Nationality)
                        when 'SecondNationality'    then convert(nvarchar(max), SecondNationality)
                        when 'City'                 then convert(nvarchar(max), City)
                        when 'Address'              then convert(nvarchar(max), Address)
                        when 'StartDate'            then convert(nvarchar(max), StartDate)
                        when 'ActiveStatus'         then convert(nvarchar(max), ActiveStatus)
                    end
                ) as RowNum
            from
                Persons p
                inner join Students s on p.Id = s.PersonId
        )
        select Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, StartDate, ActiveStatus
        from
            studentsWithRowNum
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
                when 'StartDate'            then convert(nvarchar(max), StartDate)
                when 'ActiveStatus'         then convert(nvarchar(max), ActiveStatus)
            end
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}
            offset ${offset} rows
        fetch next ${pageSizeAsNumber} rows only;`;

    const countResult = await sql.query`
        with studentsWithFilter as
        (
            select s.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, StartDate, ActiveStatus
            from
                Persons p
                inner join Students s on p.Id = s.PersonId
            where 
                case ${filterProperty}
                    when 'Id'                   then convert(nvarchar(max), s.Id)
                    when 'FirstName'            then convert(nvarchar(max), FirstName)
                    when 'LastName'             then convert(nvarchar(max), LastName)
                    when 'BirthDate'            then convert(nvarchar(max), BirthDate)
                    when 'Nationality'          then convert(nvarchar(max), Nationality)
                    when 'SecondNationality'    then convert(nvarchar(max), SecondNationality)
                    when 'City'                 then convert(nvarchar(max), City)
                    when 'Address'              then convert(nvarchar(max), Address)
                    when 'StartDate'            then convert(nvarchar(max), StartDate)
                    when 'ActiveStatus'         then convert(nvarchar(max), ActiveStatus)
            end
            like '%'+${filter}+'%'
        )
        select count(*) as Count
        from studentsWithFilter;`;

    const count = countResult.recordset[0].Count;

    return {
        items: pageResult.recordset,
        allItemsCount: count
    };
}

async function createStudent(studentDto) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
        insert into Users(EmailAddress, PasswordHash, IsActive, LastLogin)
        values
        (
            ${studentDto.EmailAddress},
            HASHBYTES('SHA2_512', '${studentDto.Password}'),
            ${studentDto.IsActive},
            null
        );

        insert into Persons(FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, UserId)
        select
            ${studentDto.FirstName},
            ${studentDto.LastName},
            ${studentDto.BirthDate},
            ${studentDto.Nationality},
            ${studentDto.SecondNationality},
            ${studentDto.City},
            ${studentDto.Address},
            u.Id 
        from Users u 
        where EmailAddress = ${studentDto.EmailAddress};
        
        declare @id int
        set @id = 
        (
            select top 1 p.Id
                from Persons p
                order by p.Id desc
        );
        insert into Students(StartDate, ActiveStatus, PersonId)
            select
                ${studentDto.StartDate},
                ${studentDto.ActiveStatus},
                @id`

    result = await sql.query`
        select top 1 s.Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, s.StartDate, s.ActiveStatus
        from Persons p
        inner join Students s on p.Id = s.PersonId
        order by s.Id desc;`;

    return result.recordset;
}

async function updateStudent(id, studentDto) {
    const student = await getStudentById(id);

    if (student === undefined) {
        const error = new Error(`No Person with Id = ${id} !`);
        error.status = 404;
        throw error;
    }

    await sql.connect(databaseConnection);

    result = await sql.query`
    update Persons
    set
        FirstName = ${studentDto.FirstName},
        LastName = ${studentDto.LastName},
        BirthDate = ${studentDto.BirthDate},
        Nationality = ${studentDto.Nationality},
        SecondNationality = ${studentDto.SecondNationality},
        City = ${studentDto.City},
        Address = ${studentDto.Address}
    where
        Id = ${id} `;

    return await getStudentById(id);
}

async function deleteById(studentId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
    delete
        from Students
    where Id = ${studentId} `;

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`No Student with Id = ${studentId} !`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    getStudentById,
    listAllStudents,
    listPaged,
    createStudent,
    deleteById,
    updateStudent
}