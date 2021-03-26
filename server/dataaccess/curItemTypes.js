const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getCurItemTypeById(itemTypeId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Id, cit.Name, SchoolId, sc.Name as SchoolName
            from CurriculumItemTypes cit
            inner join School sc on sc.Id = cit.SchoolId
        where Id = ${itemTypeId}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    if (result.recordset.length !== 1) {
        throw new Error(`More than one record with Id ${itemTypeId}`)
    }

    return result.recordset[0];
}

async function getCurItemTypeBySchoolId(schoolId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Id, cit.Name, SchoolId, sc.Name as SchoolName
            from CurriculumItemTypes cit
            inner join School sc on sc.Id = cit.SchoolId
        where SchoolId = ${schoolId}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    if (result.recordset.length !== 1) {
        throw new Error(`More than one record with Id ${schoolId}`)
    }

    return result.recordset[0];
}


async function listAllCurItemTypes(sortingProperty = 'Id', isAscending = true, filterProperty = 'Name', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
        with curItemTypesWithRowNum AS
        (
            select
                Id, cit.Name, SchoolId, sc.Name as SchoolName,
                row_number() over 
                (
                    order by
                    case ${sortingProperty}
                        when 'Id'               then convert(nvarchar(max), Id)
                        when 'Name'             then convert(nvarchar(max), cit.Name)
                        when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                        when 'SchoolName'       then convert(nvarchar(max), sc.Name)
                    end
                ) as RowNum
            from
                CurriculumItemTypes
        )
        select Id, cit.Name, SchoolId, sc.Name as SchoolName,
        from
            curItemTypesWithRowNum
        where 
            case ${filterProperty}
                when 'Id'               then convert(nvarchar(max), Id)
                when 'Name'             then convert(nvarchar(max), Name)
                when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                when 'SchoolName'       then convert(nvarchar(max), SchoolName)
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
    with curItemTypesWithRowNum AS
        (
            select
                Id, cit.Name, SchoolId, sc.Name as SchoolName,
                row_number() over
                (
                    order by
                    case ${sortingProperty}
                        when 'Id'               then convert(nvarchar(max), Id)
                        when 'Name'             then convert(nvarchar(max), cit.Name)
                        when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                        when 'SchoolName'       then convert(nvarchar(max), sc.Name)
                    end
                ) as RowNum
            from
                CurriculumItemTypes
        )   
        select Id, Name, IsActive, IsAdminManaged, MinCredit, SchoolId
        from
            curItemTypesWithRowNum
        where 
            case ${filterProperty}
                when 'Id'               then convert(nvarchar(max), Id)
                when 'Name'             then convert(nvarchar(max), Name)
                when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                when 'SchoolName'       then convert(nvarchar(max), SchoolName)
            end
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}
            offset ${offset} rows
        fetch next ${pageSizeAsNumber} rows only;`

    const countResult = await sql.query`
        with curItemTypesWithFilter as
        (
            select 
                Id, cit.Name, SchoolId, sc.Name as SchoolName,
            from
                CurriculumItemTypes
            where 
                case ${filterProperty}
                    when 'Id'               then convert(nvarchar(max), Id)
                    when 'Name'             then convert(nvarchar(max), cit.Name)
                    when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                    when 'SchoolName'       then convert(nvarchar(max), sc.Name)
            end
            like '%'+${filter}+'%'
        )
        select count(*) as Count
        from curItemTypesWithFilter`

    const count = countResult.recordset[0].Count;

    return {
        items: pageResult.recordset,
        allItemsCount: count
    };
}

async function createCurItemType(itemTypeDto) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
        insert into CurriculumItemTypes(Name, SchoolId)
        values(
            ${itemTypeDto.Name}
            ${itemTypeDto.SchoolId}
        )`
    result = await sql.query`
        select top 1 Id, Name, SchoolId
            from CurriculumItemTypes
        order by Id desc`;

    return result.recordset;
}

async function updateCurItemType(id, curItemTypeDto) {
    const curItemType = await getCurItemTypeById(id);

    if (curItemType === undefined) {
        const error = new Error(`No Curriculum item type with Id = ${id} !`);
        error.status = 404;
        throw error;
    }

    await sql.connect(databaseConnection);

    result = await sql.query`
    update CurriculumItemTypes
    set
        Name = ${curItemTypeDto.Name}
        SchoolId = ${curItemTypeDto.SchoolId}
    where
    Id = ${id} `;

    return await getCurItemTypeById(id);
}

async function deleteById(curItemTypeId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        delete 
        from CurriculumItemTypes
        where Id = ${curItemTypeId}`;

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`No CurriculumItemType with Id = ${curItemTypeId} !`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    getCurItemTypeById,
    getCurItemTypeBySchoolId,
    listAllCurItemTypes,
    listPaged,
    createCurItemType,
    updateCurItemType,
    deleteById
}