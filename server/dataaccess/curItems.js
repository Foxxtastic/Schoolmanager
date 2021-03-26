const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getCurItemById(curItemId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Id, ProgrammeId, Name, Credit, TypeId
            from CurriculumItems 
        where Id = ${curItemId}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    if (result.recordset.length !== 1) {
        throw new Error(`More than one record with Id ${curItemId}`)
    }

    return result.recordset[0];
}

async function listAllCurItems(sortingProperty = 'Id', isAscending = true, filterProperty = 'Name', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
        with curItemsWithRowNum AS
        (
            select
                Id, ProgrammeId, Name, Credit, TypeId
                row_number() over 
                (
                    order by
                    case ${sortingProperty}
                        when 'Id'               then convert(nvarchar(max), Id)
                        when 'ProgrammeId'      then convert(nvarchar(max), ProgrammeId)
                        when 'Name'             then convert(nvarchar(max), Name)
                        when 'Credit'           then convert(nvarchar(max), Credit)
                        when 'TypeId'           then convert(nvarchar(max), TypeId)
                    end
                ) as RowNum
            from
                CurriculumItems
        )
        select Id, ProgrammeId, Name, Credit, TypeId
        from
            curItemsWithRowNum
        where 
            case ${filterProperty}
                when 'Id'               then convert(nvarchar(max), Id)
                when 'ProgrammeId'      then convert(nvarchar(max), ProgrammeId)
                when 'Name'             then convert(nvarchar(max), Name)
                when 'Credit'           then convert(nvarchar(max), Credit)
                when 'TypeId'           then convert(nvarchar(max), TypeId)
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
    with curItemsWithRowNum AS
        (
            select
                Id, ProgrammeId, Name, Credit, TypeId
                row_number() over
                (
                    order by
                    case ${sortingProperty}
                        when 'Id'               then convert(nvarchar(max), Id)
                        when 'ProgrammeId'      then convert(nvarchar(max), ProgrammeId)
                        when 'Name'             then convert(nvarchar(max), Name)
                        when 'Credit'           then convert(nvarchar(max), Credit)
                        when 'TypeId'           then convert(nvarchar(max), TypeId)
                    end
                ) as RowNum
            from
                CurriculumItems
        )   
        select Id, ProgrammeId, Name, Credit, TypeId
        from
            curItemTypesWithRowNum
        where 
            case ${filterProperty}
                when 'Id'               then convert(nvarchar(max), Id)
                when 'ProgrammeId'      then convert(nvarchar(max), ProgrammeId)
                when 'Name'             then convert(nvarchar(max), Name)
                when 'Credit'           then convert(nvarchar(max), Credit)
                when 'TypeId'           then convert(nvarchar(max), TypeId)
            end
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}
            offset ${offset} rows
        fetch next ${pageSizeAsNumber} rows only;`

    const countResult = await sql.query`
        with curItemsWithFilter as
        (
            select 
                Id, ProgrammeId, Name, Credit, TypeId
            from
                CurriculumItems
            where 
                case ${filterProperty}
                    when 'Id'               then convert(nvarchar(max), Id)
                    when 'ProgrammeId'      then convert(nvarchar(max), ProgrammeId)
                    when 'Name'             then convert(nvarchar(max), Name)
                    when 'Credit'           then convert(nvarchar(max), Credit)
                    when 'TypeId'           then convert(nvarchar(max), TypeId)
            end
            like '%'+${filter}+'%'
        )
        select count(*) as Count
        from curItemsWithFilter`

    const count = countResult.recordset[0].Count;

    return {
        items: pageResult.recordset,
        allItemsCount: count
    };
}

async function createCurItem(curItemDto) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
        insert into CurriculumItems(ProgrammeId, Name, Credit, TypeId)
        values(
            ${curItemDto.ProgrammeId}
            ${curItemDto.Name}
            ${curItemDto.Credit}
            ${curItemDto.TypeId}
        )`
    result = await sql.query`
        select top 1 Id, ProgrammeId, Name, Credit, TypeId
            from CurriculumItems
        order by Id desc`;

    return result.recordset;
}

async function updateCurItem(id, curItemDto) {
    const curItem = await getCurItemById(id);

    if (curItem === undefined) {
        const error = new Error(`No Curriculum item with Id = ${id} !`);
        error.status = 404;
        throw error;
    }

    await sql.connect(databaseConnection);

    result = await sql.query`
    update CurriculumItems
    set
        ProgrammeId =${curItemDto.ProgrammeId}
        Name = ${curItemDto.Name}
        Credit = ${curItemDto.Credit}
        TypeId = ${curItemDto.TypeId}
    where
    Id = ${id} `;

    return await getCurItemById(id);
}

async function deleteById(curItemId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        delete 
        from CurriculumItems
        where Id = ${curItemId}`;

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`No Curriculum item with Id = ${curItemId} !`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    getCurItemById,
    listAllCurItems,
    listPaged,
    createCurItem,
    updateCurItem,
    deleteById
}