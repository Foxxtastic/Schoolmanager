const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getSchoolById(schoolId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Id, EduId, Name, Country, City, Address
        from Schools
        where Id = ${schoolId}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    if (result.recordset.length !== 1) {
        throw new Error(`More than one record with Id ${schoolId}`)
    }

    return result.recordset[0];
}

async function listAllSchools(sortingProperty = 'Id', isAscending = true, filterProperty = 'EduId', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
        with schoolsWithRowNum AS
        (
            select
                *,
                row_number() over 
                (
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
                row_number() over 
                (
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
        insert into Schools(EduId, Name, Country, City, Address)
        values (${schoolDto.EduId}, ${schoolDto.Name}, ${schoolDto.Country}, ${schoolDto.City}, ${schoolDto.Address})`;

    result = await sql.query`
        select top 1 Id, EduId, Name, Country, City, Address
        from Schools
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
        update Schools
        set
            EduId = ${schoolDto.EduId},
            Name = ${schoolDto.Name},
            Country = ${schoolDto.Country},
            City = ${schoolDto.City},
            Address = ${schoolDto.Address}
        where
            Id = ${id}`;

    return await getSchoolById(id);
}

async function deleteById(schoolId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        delete sc
            from Schools sc
            left outer join SchoolStudent scs on sc.Id = scs.SchoolId
            left outer join SchoolTeacher sct on sc.Id = sct.SchoolId
        where sc.Id = ${schoolId} and scs.SchoolId is null and sct.SchoolId is null;`;

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`There is a Person connected to this School or, no School with Id = ${schoolId} !`);
        error.status = 500;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    getSchoolById,
    listAllSchools,
    listPaged,
    createSchool,
    deleteById,
    updateSchool
}