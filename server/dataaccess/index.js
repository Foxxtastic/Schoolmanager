const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getSchoolById(schoolId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Id, EduId, Name, Country, City, Address
        from dbo.Schools
        where Id = ${schoolId}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    return result.recordset;
}

async function listAllSchools(sortingProperty = 'Id', isAscending = true, filterProperty = 'EduId', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
        with schoolsWithRowNum AS
        (
            select
                *,
                row_number() over (
                    order by
                    case ${sortingProperty}
                        when 'Id'      then convert(nvarchar(max), Id)
                        when 'EduId'   then convert(nvarchar(max), EduId)
                        when 'Name'    then convert(nvarchar(max), Name)
                        when 'Country' then convert(nvarchar(max), Country)
                        when 'City'    then convert(nvarchar(max), City)
                        when 'Address' then convert(nvarchar(max), Address)
                    end
                ) as RowNum
            from
                Schools
        )
        select Id, EduId, Name, Country, City, Address
        from
            schoolsWithRowNum
        where 
            case ${filterProperty}
                when 'Id'      then convert(nvarchar(max), Id)
                when 'EduId'   then convert(nvarchar(max), EduId)
                when 'Name'    then convert(nvarchar(max), Name)
                when 'Country' then convert(nvarchar(max), Country)
                when 'City'    then convert(nvarchar(max), City)
                when 'Address' then convert(nvarchar(max), Address)
            end
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}`;

    return {
        items: result.recordset,
        allItemsCount: result.recordset.length
    };
}

async function listPaged(pageNumber, pageSize, sortingProperty = 'Id', isAscending = true, filterProperty = 'EduId', filter = '') {
    await sql.connect(databaseConnection);
    const offset = (pageNumber === '0') ? 0 : (pageNumber - 1) * pageSize;
    const pageSizeAsNumber = parseInt(pageSize, 10);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const pageResult = await sql.query`
        with schoolsWithRowNum as
        (
            select
                *,
                row_number() over (
                    order by
                    case ${sortingProperty}
                        when 'Id'      then convert(nvarchar(max), Id)
                        when 'EduId'   then convert(nvarchar(max), EduId)
                        when 'Name'    then convert(nvarchar(max), Name)
                        when 'Country' then convert(nvarchar(max), Country)
                        when 'City'    then convert(nvarchar(max), City)
                        when 'Address' then convert(nvarchar(max), Address)
                    end
                ) as RowNum
            from
                Schools
        )
        select Id, EduId, Name, Country, City, Address
        from
            schoolsWithRowNum
        where 
            case ${filterProperty}
                when 'Id'      then convert(nvarchar(max), Id)
                when 'EduId'   then convert(nvarchar(max), EduId)
                when 'Name'    then convert(nvarchar(max), Name)
                when 'Country' then convert(nvarchar(max), Country)
                when 'City'    then convert(nvarchar(max), City)
                when 'Address' then convert(nvarchar(max), Address)
            end
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}
            offset ${offset} rows
        fetch next ${pageSizeAsNumber} rows only;`

    const countResult = await sql.query`
        with schoolsWithFilter as
        (
        select Id, EduId, Name, Country, City, Address
            from
                Schools
            where 
                case ${filterProperty}
                    when 'Id'      then convert(nvarchar(max), Id)
                    when 'EduId'   then convert(nvarchar(max), EduId)
                    when 'Name'    then convert(nvarchar(max), Name)
                    when 'Country' then convert(nvarchar(max), Country)
                    when 'City'    then convert(nvarchar(max), City)
                    when 'Address' then convert(nvarchar(max), Address)
                end
                like '%'+${filter}+'%'
        )
        select count(*) as Count
        from schoolsWithFilter`

    const count = countResult.recordset[0].Count;

    return {
        items: pageResult.recordset,
        allItemsCount: count
    };
}

async function createSchool(schoolDto) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
        insert into dbo.Schools(EduId, Name, Country, City, Address)
        values (${schoolDto.EduId}, ${schoolDto.Name}, ${schoolDto.Country}, ${schoolDto.City}, ${schoolDto.Address})`;

    result = await sql.query`
        select top 1 Id, EduId, Name, Country, City, Address
        from dbo.Schools
        order by Id desc`;

    return result.recordset;
}

async function updateSchool(id, schoolDto) {
    const school = await getSchoolById(id);

    if (school === undefined) {
        const error = new Error(`No School with Id = ${id}!`);
        error.status = 404;
        throw error;
    }

    await sql.connect(databaseConnection);

    result = await sql.query`
        update dbo.Schools
        set
            EduId = ${schoolDto.eduId},
            Name = ${schoolDto.name},
            Country = ${schoolDto.country},
            City = ${schoolDto.city},
            Address = ${schoolDto.address}
        where
            Id = ${id}`;

    return await getSchoolById(id);
}

async function deleteById(schoolId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        delete
        from dbo.Schools
        where Id = ${schoolId}`;

    if (result.rowsAffected === 0) {
        const error = new Error(`No Product with Id = ${schoolId}!`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected;
}
module.exports = {
    getSchoolById,
    listAllSchools,
    listPaged,
    createSchool,
    deleteById,
    updateSchool
}