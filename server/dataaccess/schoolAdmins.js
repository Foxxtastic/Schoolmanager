const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getSchoolAdminByUserId(userId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
    select SchoolId, UserId, EmailAddress, Name, IsActive
        from vSchoolAdmins sa
        inner join Users u on u.Id = sa.UserId
        inner join Schools s on s.Id = sa.SchoolId
    where u.Id = ${userId};`;

    return result.recordset[0];
}

async function getSchoolAdminByEmailAddress(email) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
    select SchoolId, UserId, EmailAddress, Name, IsActive
        from vSchoolAdmins sa
        inner join Users u on u.Id = sa.UserId
        inner join Schools s on s.Id = sa.SchoolId
    where u.EmailAddress = ${email};`;

    return result.recordset[0];
}

async function listAllSchoolAdmins(sortingProperty = 'Id', isAscending = true, filterProperty = 'Name', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
        with schoolAdminsWithRowNum AS
        (
            select
                SchoolId, UserId, EmailAddress, IsActive, LastLogin, EduId, Name, Country,
                row_number() over 
                (
                    order by
                    case ${sortingProperty}
                        when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                        when 'UserId'           then convert(nvarchar(max), UserId)
                        when 'EmailAddress'     then convert(nvarchar(max), EmailAddress)
                        when 'Name'             then convert(nvarchar(max), Name)
                        when 'IsActive'         then convert(nvarchar(max), IsActive)
                    end
                ) as RowNum
            from vSchoolAdmins sa
                inner join Users u on u.Id = sa.UserId
                inner join Schools s on s.Id = sa.SchoolId
        )
        select SchoolId, UserId, EmailAddress, IsActive, LastLogin, EduId, Name, Country
        from
            schoolAdminsWithRowNum
        where 
            case ${filterProperty}
                when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                when 'UserId'           then convert(nvarchar(max), UserId)
                when 'EmailAddress'     then convert(nvarchar(max), EmailAddress)
                when 'Name'             then convert(nvarchar(max), Name)
                when 'IsActive'         then convert(nvarchar(max), IsActive)
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
    with schoolAdminsWithRowNum AS
        (
            select
                SchoolId, UserId, EmailAddress, IsActive, LastLogin, EduId, Name, Country,
                row_number() over
                (
                    order by
                    case ${sortingProperty}
                        when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                        when 'UserId'           then convert(nvarchar(max), UserId)
                        when 'EmailAddress'     then convert(nvarchar(max), EmailAddress)
                        when 'Name'             then convert(nvarchar(max), Name)
                        when 'IsActive'         then convert(nvarchar(max), IsActive)
                    end
                ) as RowNum
            from vSchoolAdmins sa
                inner join Users u on u.Id = sa.UserId
                inner join Schools s on s.Id = sa.SchoolId
        )   
        select SchoolId, UserId, EmailAddress, IsActive, LastLogin, EduId, Name, Country
        from
            schoolAdminsWithRowNum
        where 
            case ${filterProperty}
                when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                when 'UserId'           then convert(nvarchar(max), UserId)
                when 'EmailAddress'     then convert(nvarchar(max), EmailAddress)
                when 'Name'             then convert(nvarchar(max), Name)
                when 'IsActive'         then convert(nvarchar(max), IsActive)
            end
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}
            offset ${offset} rows
        fetch next ${pageSizeAsNumber} rows only;`

    const countResult = await sql.query`
        with schoolAdminsWithFilter as
        (
            select SchoolId, UserId, EmailAddress, IsActive, LastLogin, EduId, Name, Country
            from vSchoolAdmins sa
                inner join Users u on u.Id = sa.UserId
                inner join Schools s on s.Id = sa.SchoolId
            where 
                case ${filterProperty}
                    when 'SchoolId'         then convert(nvarchar(max), SchoolId)
                    when 'UserId'           then convert(nvarchar(max), UserId)
                    when 'EmailAddress'     then convert(nvarchar(max), EmailAddress)
                    when 'Name'             then convert(nvarchar(max), Name)
                    when 'IsActive'         then convert(nvarchar(max), IsActive)
            end
            like '%'+${filter}+'%'
        )
        select count(*) as Count
        from schoolAdminsWithFilter`

    const count = countResult.recordset[0].Count;

    return {
        items: pageResult.recordset,
        allItemsCount: count
    };
}

async function createSchoolAdmin(schoolAdminDto) {
    if (schoolAdminDto.IsActive === undefined) {
        schoolAdminDto['IsActive'] = true;
    }
    await sql.connect(databaseConnection);
    let result = await sql.query`
    insert into Users(EmailAddress, PasswordHash, IsActive, LastLogin)
    values 
    (
        ${schoolAdminDto.EmailAddress},
        HASHBYTES('SHA2_512', ${schoolAdminDto.Password}),
        ${schoolAdminDto.IsActive},
        ${schoolAdminDto.LastLogin}
    );

    declare @uid int
    set @uid = 
    (
        select top 1 Id
            from Users
        order by Id desc
    );

    declare @gid int
    set @gid =
    (
        select Id
            from SecurityGroup
        where Name='SchoolAdmin'
    );
        
    insert into SecurityGroupMember(UserId, GroupId, SchoolId)
    values
    (
        @uid,
        @gid,
        ${schoolAdminDto.SchoolId}
    )`;

    result = await sql.query`
        select top 1 UserId, GroupId, SchoolId
            from SecurityGroupMember;`

    return result.recordset;
}

module.exports = {
    getSchoolAdminByUserId,
    getSchoolAdminByEmailAddress,
    listAllSchoolAdmins,
    listPaged,
    createSchoolAdmin
}