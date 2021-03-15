const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getProgrammeById(programmeId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Id, Name, IsActive, IsAdminManaged, MinCredit, SchoolId
        from EducationalProgrammes
        where Id = ${programmeId}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    if (result.recordset.length !== 1) {
        throw new Error(`More than one record with Id ${programmeId}`)
    }

    return result.recordset[0];
}

async function listAllProgrammes(sortingProperty = 'Id', isAscending = true, filterProperty = 'Name', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
        with programmesWithRowNum AS
        (
            select
                *,
                row_number() over 
                (
                    order by
                    case ${sortingProperty}
                        when 'Id'               then convert(nvarchar(max), Id)
                        when 'Name'             then convert(nvarchar(max), Name)
                        when 'IsActive'         then convert(nvarchar(max), IsActive)
                        when 'IsAdminManaged'   then convert(nvarchar(max), IsAdminManaged)
                        when 'MinCredit'        then convert(nvarchar(max), MinCredit)
                        when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                    end
                ) as RowNum
            from
                EducationalProgrammes
        )
        select Id, Name, IsActive, IsAdminManaged, MinCredit, SchoolId
        from
            programmesWithRowNum
        where 
            case ${filterProperty}
                when 'Id'               then convert(nvarchar(max), Id)
                when 'Name'             then convert(nvarchar(max), Name)
                when 'IsActive'         then convert(nvarchar(max), IsActive)
                when 'IsAdminManaged'   then convert(nvarchar(max), IsAdminManaged)
                when 'MinCredit'        then convert(nvarchar(max), MinCredit)
                when 'SchoolId'         then convert(nvarchar(max), SchoolId)
            end
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}`;

    return {
        items: result.recordset,
        allItemsCount: result.recordset.length
    };
}

async function listPaged(pageNumber, pageSize, sortingProperty = 'Id', isAscending = true, filterProperty = 'Name', filter = '') {
    await sql.connect(databaseConnection);
    const offset = (pageNumber === '0') ? 0 : (pageNumber - 1) * pageSize;
    const pageSizeAsNumber = parseInt(pageSize, 10);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const pageResult = await sql.query`
    with programmeWithRowNum AS
        (
            select
                *,
                row_number() over
                (
                    order by
                    case ${sortingProperty}
                        when 'Id'               then convert(nvarchar(max), Id)
                        when 'Name'             then convert(nvarchar(max), Name)
                        when 'IsActive'         then convert(nvarchar(max), IsActive)
                        when 'IsAdminManaged'   then convert(nvarchar(max), IsAdminManaged)
                        when 'MinCredit'        then convert(nvarchar(max), MinCredit)
                        when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                    end
                ) as RowNum
            from
                Majors
        )   
        select Id, Name, IsActive, IsAdminManaged, MinCredit, SchoolId
        from
            programmesWithRowNum
        where 
            case ${filterProperty}
                when 'Id'               then convert(nvarchar(max), Id)
                when 'Name'             then convert(nvarchar(max), Name)
                when 'IsActive'         then convert(nvarchar(max), IsActive)
                when 'IsAdminManaged'   then convert(nvarchar(max), IsAdminManaged)
                when 'MinCredit'        then convert(nvarchar(max), MinCredit)
                when 'SchoolId'         then convert(nvarchar(max), SchoolId)
            end
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}
            offset ${offset} rows
        fetch next ${pageSizeAsNumber} rows only;`

    const countResult = await sql.query`
        with programmesWithFilter as
        (
            select Id, Name, IsActive, IsAdminManaged, MinCredit, SchoolId
            from
                EducationalProgrammes
            where 
                case ${filterProperty}
                    when 'Id'               then convert(nvarchar(max), Id)
                    when 'Name'             then convert(nvarchar(max), Name)
                    when 'IsActive'         then convert(nvarchar(max), IsActive)
                    when 'IsAdminManaged'   then convert(nvarchar(max), IsAdminManaged)
                    when 'MinCredit'        then convert(nvarchar(max), MinCredit)
                    when 'SchoolId'         then convert(nvarchar(max), SchoolId)
            end
            like '%'+${filter}+'%'
        )
        select count(*) as Count
        from majorsWithFilter`

    const count = countResult.recordset[0].Count;

    return {
        items: pageResult.recordset,
        allItemsCount: count
    };
}

async function createProgramme(programmeDto) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
        insert into EducationalProgrammes(Name)
        values(
            ${programmeDto.Name}
            ${programmeDto.IsActive}
            ${programmeDto.IsAdminManaged}
            ${programmeDto.MinCredit}
            ${programmeDto.SchoolId}
        )`
    result = await sql.query`
        select top 1 Id, Name, IsActive, IsAdminManaged, MinCredit, SchoolId
            from EducationalProgrammes
        order by Id desc`;

    return result.recordset;
}

async function updateProgramme(id, programmeDto) {
    const programme = await getProgrammeById(id);

    if (programme === undefined) {
        const error = new Error(`No Educational Programme with Id = ${id} !`);
        error.status = 404;
        throw error;
    }

    await sql.connect(databaseConnection);

    result = await sql.query`
    update EducationalProgrammes
    set
        Name = ${programmeDto.Name}
        IsActive = ${programmeDto.IsActive}
        IsAdminManaged = ${programmeDto.IsAdminManaged}
        MinCredit = ${programmeDto.MinCredit}
        SchoolId = ${programmeDto.SchoolId}
    where
    Id = ${id} `;

    return await getMajorById(id);
}

async function deleteById(programmeId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        delete ep
        from EducationalProgrammes m
            left outer join CurriculumItems ci on ci.ProgrammeId = ep.Id
        where ep.Id = ${programmeId} and ci.ProgrammeId is null`;

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`There is a Curriculum item with ${programmeId} programme or, no Programme with Id = ${programmeId} !`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    getProgrammeById,
    listAllProgrammes,
    listPaged,
    createProgramme,
    updateProgramme,
    deleteById
}