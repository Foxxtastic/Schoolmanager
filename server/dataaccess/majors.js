const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getMajorById(majorId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Id, Name
        from Majors
        where Id = ${majorId}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    if (result.recordset.length !== 1) {
        throw new Error(`More than one record with Id ${majorId}`)
    }

    return result.recordset[0];
}

async function listAllMajors(sortingProperty = 'Id', isAscending = true, filterProperty = 'Name', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
        with majorsWithRowNum AS
        (
            select
                *,
                row_number() over 
                (
                    order by
                    case ${sortingProperty}
                        when 'Id'     then convert(nvarchar(max), Id)
                        when 'Name'   then convert(nvarchar(max), Name)
                    end
                ) as RowNum
            from
                Majors
        )
        select Id, Name
        from
            majorsWithRowNum
        where 
            case ${filterProperty}
                when 'Id'      then convert(nvarchar(max), Id)
                when 'Name'    then convert(nvarchar(max), Name)
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
    with majorsWithRowNum AS
        (
            select
                *,
                row_number() over
                (
                    order by
                    case ${sortingProperty}
                        when 'Id'           then convert(nvarchar(max), Id)
                        when 'Name'         then convert(nvarchar(max), Name)
                    end
                ) as RowNum
            from
                Majors
        )   
        select Id, Name
        from
            majorsWithRowNum
        where 
            case ${filterProperty}
                when 'Id'              then convert(nvarchar(max), Id)
                when 'Name'            then convert(nvarchar(max), Name)
            end
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}
            offset ${offset} rows
        fetch next ${pageSizeAsNumber} rows only;`

    const countResult = await sql.query`
        with majorsWithFilter as
        (
        select Id, Name
            from
                Majors
            where 
                case ${filterProperty}
                    when 'Id'              then convert(nvarchar(max), Id)
                    when 'Name'            then convert(nvarchar(max), Name)
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

async function createMajor(majorDto) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
        insert into Majors(Name)
        values(
            ${majorDto.Name});`

    result = await sql.query`
        select top 1 Id, Name
        from Majors
        order by Id desc`;

    return result.recordset;
}

async function updateMajor(id, majorDto) {
    const major = await getMajorById(id);

    if (major === undefined) {
        const error = new Error(`No Major with Id = ${id} !`);
        error.status = 404;
        throw error;
    }

    await sql.connect(databaseConnection);

    result = await sql.query`
        update Majors
        set
            Name = ${majorDto.Name}
        where
        Id = ${id} `;

    return await getMajorById(id);
}

async function deleteById(majorId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        delete m
        from Majors m
            left outer join MajorTeacher t on t.MajorId = m.Id
        where m.Id = ${majorId} and t.MajorId is null`;

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`There is a Teacher with ${majorId} major or, no Major with Id = ${majorId} !`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    getMajorById,
    listAllMajors,
    listPaged,
    createMajor,
    deleteById,
    updateMajor
}