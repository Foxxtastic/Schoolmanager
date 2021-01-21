const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getPersonById(personId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address
        from dbo.Persons
        where Id = ${personId}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    if (result.recordset.length !== 1) {
        throw new Error(`More than one record with Id ${personId}`)
    }

    return result.recordset[0];
}

async function listAllPersons(sortingProperty = 'Id', isAscending = true, filterProperty = 'FirstName', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
        with personsWithRowNum AS
        (
            select
                *,
                row_number() over (
                    order by
                    case ${sortingProperty}
                        when 'Id'                   then convert(nvarchar(max), Id)
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
                Persons
        )
        select Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address
        from
            personsWithRowNum
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
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}`;

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
    with personsWithRowNum AS
        (
            select
                *,
                row_number() over (
                    order by
                    case ${sortingProperty}
                        when 'Id'                   then convert(nvarchar(max), Id)
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
                Persons
        )   
        select Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address
        from
            personsWithRowNum
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
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}
            offset ${offset} rows
        fetch next ${pageSizeAsNumber} rows only;`

    const countResult = await sql.query`
        with personsWithFilter as
        (
        select Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address
            from
                Persons
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
            like '%'+${filter}+'%'
        )
        select count(*) as Count
        from personsWithFilter`

    const count = countResult.recordset[0].Count;

    return {
        items: pageResult.recordset,
        allItemsCount: count
    };
}

async function createPerson(personDto) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
        insert into dbo.Users(EmailAddress, PasswordHash, IsActive, LastLogin)
        values(
            ${personDto.EmailAddress},
            HASHBYTES('SHA2_512', '${personDto.Password}'),
            ${personDto.IsActive},
            ${personDto.LastLogin})
            
        insert into dbo.Persons(FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, UserId)
        SELECT
            ${personDto.FirstName},
            ${personDto.LastName},
            ${personDto.BirthDate},
            ${personDto.Nationality},
            ${personDto.SecondNationality},
            ${personDto.City},
            ${personDto.Address},
        u.Id FROM dbo.Users u WHERE EmailAddress = ${personDto.EmailAddress} `

    result = await sql.query`
        select top 1 Id, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address
        from dbo.Persons
        order by Id desc`;

    return result.recordset;
}

async function updatePerson(id, personDto) {
    const person = await getPersonById(id);

    if (person === undefined) {
        const error = new Error(`No Person with Id = ${id} !`);
        error.status = 404;
        throw error;
    }

    await sql.connect(databaseConnection);

    result = await sql.query`
    update dbo.Persons
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

    return await getPersonById(id);
}

async function deleteById(personId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
    delete
        from dbo.Persons
    where Id = ${personId} `;

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`No Person with Id = ${personId} !`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    getPersonById,
    listAllPersons,
    listPaged,
    createPerson,
    deleteById,
    updatePerson
}