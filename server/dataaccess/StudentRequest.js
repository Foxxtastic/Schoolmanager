const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getStudentRequestsBySchoolId(schoolId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select SchoolId, StudentId, Message, AprovalRequest, IsCompleted
        from StudentRequest
        where SchoolId = ${schoolId}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    return result.recordset;
}

async function getStudentRequestByIds(schoolId, studentId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select SchoolId, StudentId, Message, AprovalRequest, IsCompleted
        from StudentRequest
        where SchoolId = ${schoolId} and StudentId= ${studentId}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    if (result.recordset.length !== 1) {
        throw new Error(`More than one record with SchoolId ${schoolId} and StudentId ${studentId}`)
    }

    return result.recordset[0];
}

async function listAllStudentRequests(sortingProperty = 'Id', isAscending = true, filterProperty = 'Name', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
        with StudentRequestWithRowNum AS
        (
            select
                *,
                row_number() over 
                (
                    order by
                    case ${sortingProperty}
                        when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                        when 'StudentId'        then convert(nvarchar(max), StudentId)
                        when 'Message'          then convert(nvarchar(max), Message)
                        when 'AprovalRequest    then convert(nvarchar(max), AprovalRequest)
                        when 'IsCompleted'      then convert(nvarchar(max), IsCompleted)
                    end
                ) as RowNum
            from
                StudentRequest
        )
        select SchoolId, StudentId, Message, AprovalRequest, IsCompleted
        from
            StudentRequestWithRowNum
        where 
            case ${filterProperty}
                when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                when 'StudentId'        then convert(nvarchar(max), StudentId)
                when 'Message'          then convert(nvarchar(max), Message)
                when 'AprovalRequest    then convert(nvarchar(max), AprovalRequest)
                when 'IsCompleted'      then convert(nvarchar(max), IsCompleted)
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
    with StudentRequestWithRowNum AS
        (
            select
                *,
                row_number() over
                (
                    order by
                    case ${sortingProperty}
                        when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                        when 'StudentId'        then convert(nvarchar(max), StudentId)
                        when 'Message'          then convert(nvarchar(max), Message)
                        when 'AprovalRequest    then convert(nvarchar(max), AprovalRequest)
                        when 'IsCompleted'      then convert(nvarchar(max), IsCompleted)
                    end
                ) as RowNum
            from
                StudentRequest
        )   
        select SchoolId, StudentId, Message, AprovalRequest, IsCompleted
        from
            StudentRequestWithRowNum
        where 
            case ${filterProperty}
                when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                when 'StudentId'        then convert(nvarchar(max), StudentId)
                when 'Message'          then convert(nvarchar(max), Message)
                when 'AprovalRequest    then convert(nvarchar(max), AprovalRequest)
                when 'IsCompleted'      then convert(nvarchar(max), IsCompleted)
            end
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}
            offset ${offset} rows
        fetch next ${pageSizeAsNumber} rows only;`

    const countResult = await sql.query`
        with StudentRequestWithFilter as
        (
        select SchoolId, StudentId, Message, AprovalRequest, IsCompleted
            from
                StudentRequest
            where 
                case ${filterProperty}
                    when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                    when 'StudentId'        then convert(nvarchar(max), StudentId)
                    when 'Message'          then convert(nvarchar(max), Message)
                    when 'AprovalRequest    then convert(nvarchar(max), AprovalRequest)
                    when 'IsCompleted'      then convert(nvarchar(max), IsCompleted)
            end
            like '%'+${filter}+'%'
        )
        select count(*) as Count
        from StudentRequestWithFilter`

    const count = countResult.recordset[0].Count;

    return {
        items: pageResult.recordset,
        allItemsCount: count
    };
}

async function createStudentRequest(requestDto) {
    if (requestDto.AprovalRequest === undefined) {
        requestDto.AprovalRequest = false;
    }

    if (requestDto.IsCompleted === undefined) {
        requestDto.IsCompleted = false;
    }

    await sql.connect(databaseConnection);
    let result = await sql.query`
        insert into StudentRequest(SchoolId, StudentId, Message, AprovalRequest, IsCompleted)
        values(
            ${requestDto.SchoolId},
            ${requestDto.StudentId},
            ${requestDto.Message},
            ${requestDto.AprovalRequest},
            ${requestDto.IsCompleted});`

    result = await sql.query`
        select top 1 Id, Name
        from StudentRequest
        order by Id desc`;

    return result.recordset;
}

async function updateStudentRequest(schoolId, studentId, requestDto) {
    const request = await getStudentRequestByIds(schoolId, studentId);

    if (request === undefined) {
        const error = new Error(`No Request with SchoolId = ${schoolId} and StudentId = ${studentId} !`);
        error.status = 404;
        throw error;
    }

    await sql.connect(databaseConnection);

    result = await sql.query`
    update StudentRequest
    set
        SchoolId = ${requestDto.SchoolId},
        StudentId = ${requestDto.StudentId},
        Message = ${requestDto.Message},
        AprovalRequest = ${requestDto.AprovalRequest},
        IsCompleted = ${requestDto.IsCompleted}
    where
        SchoolId = ${schoolId} and StudentId = ${studentId} `;

    return await getStudentRequestByIds(schoolId, studentId);
}

async function rejectRequest(schoolId, studentId) {
    await sql.connect(databaseConnection);

    result = await sql.query`
    update StudentRequest
    set
        AprovalRequest = ${false}
        IsCompleted = ${true}
    where 
        SchoolId = ${schoolId} and StudentId = ${studentId} `;

    return await getStudentRequestByIds(schoolId, studentId);
}

async function acceptRequest(schoolId, studentId) {
    await sql.connect(databaseConnection);

    result = await sql.query`
    update StudentRequest
    set
        AprovalRequest = ${true}
        IsCompleted = ${true}
    where 
        SchoolId = ${schoolId} and StudentId = ${studentId} `;

    return await getStudentRequestByIds(schoolId, studentId);
}

async function deleteByIds(schoolId, studentId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
    delete
        from studentRequest
    where schoolId = ${schoolId} and studentId = ${studentId} `;

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`There is no Request with SchoolId ${schoolId} and with StudentId ${studentId} !`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    getStudentRequestsBySchoolId,
    getStudentRequestByIds,
    listAllStudentRequests,
    listPaged,
    createStudentRequest,
    deleteByIds,
    updateStudentRequest,
    acceptRequest,
    rejectRequest
}