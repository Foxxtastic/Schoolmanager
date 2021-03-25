const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getAppAdminByUserId(userId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
    select Id, u.EmailAddress, IsActive, LastLogin
        from vAppAdmins a
        inner join Users u on u.Id = a.UserId
    where u.Id = ${userId};`;

    return result.recordset[0];
}

async function getAppAdminByEmailAddress(email) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
    select Id, u.EmailAddress, IsActive, LastLogin
        from vAppAdmins a
        inner join Users u on u.Id = a.UserId
    where u.EmailAddress = ${email};`;

    return result.recordset[0];
}

async function listAllAppAdmins(sortingProperty = 'UserId', isAscending = true, filterProperty = 'IsActive', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
        with appAdminsWithRowNum AS
        (
            select
                UserId, u.EmailAddress, IsActive, LastLogin,
                row_number() over 
                (
                    order by
                    case ${sortingProperty}
                        when 'UserId'           then convert(nvarchar(max), UserId)
                        when 'EmailAddress'     then convert(nvarchar(max), u.EmailAddress)
                        when 'IsActive'         then convert(nvarchar(max), IsActive)
                    end
                ) as RowNum
            from vAppAdmins a
                inner join Users u on u.Id = a.UserId
        )
        select UserId, EmailAddress, IsActive, LastLogin
        from
            appAdminsWithRowNum
        where 
            case ${filterProperty}
                when 'UserId'           then convert(nvarchar(max), UserId)
                when 'EmailAddress'     then convert(nvarchar(max), EmailAddress)
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

async function listPaged(pageNumber, pageSize, sortingProperty = 'UserId', isAscending = true, filterProperty = 'IsActive', filter = '') {
    await sql.connect(databaseConnection);
    const offset = (pageNumber === '0') ? 0 : (pageNumber - 1) * pageSize;
    const pageSizeAsNumber = parseInt(pageSize, 10);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const pageResult = await sql.query`
    with appAdminsWithRowNum AS
        (
            select
                UserId, u.EmailAddress, IsActive, LastLogin,
                row_number() over
                (
                    order by
                    case ${sortingProperty}
                        when 'UserId'           then convert(nvarchar(max), UserId)
                        when 'EmailAddress'     then convert(nvarchar(max), u.EmailAddress)
                        when 'IsActive'         then convert(nvarchar(max), IsActive)
                    end
                ) as RowNum
            from vAppAdmins a
                inner join Users u on u.Id = a.UserId
        )   
        select UserId, EmailAddress, IsActive, LastLogin
        from
            appAdminsWithRowNum
        where 
            case ${filterProperty}
                when 'UserId'           then convert(nvarchar(max), UserId)
                when 'EmailAddress'     then convert(nvarchar(max), EmailAddress)
                when 'IsActive'         then convert(nvarchar(max), IsActive)
            end
            like '%'+${filter}+'%'
        order by
            RowNum * ${isAscendingParam}
            offset ${offset} rows
        fetch next ${pageSizeAsNumber} rows only;`

    const countResult = await sql.query`
        with appAdminsWithFilter as
        (
            select UserId, u.EmailAddress, IsActive, LastLogin
            from vAppAdmins a
                inner join Users u on u.Id = a.UserId
            where 
                case ${filterProperty}
                    when 'UserId'           then convert(nvarchar(max), UserId)
                    when 'EmailAddress'     then convert(nvarchar(max), u.EmailAddress)
                    when 'IsActive'         then convert(nvarchar(max), IsActive)
            end
            like '%'+${filter}+'%'
        )
        select count(*) as Count
        from appAdminsWithFilter`

    const count = countResult.recordset[0].Count;

    return {
        items: pageResult.recordset,
        allItemsCount: count
    };
}

async function createAppAdmin(appAdminDto) {
    if (appAdminDto.IsActive === undefined) {
        appAdminDto['IsActive'] = true;
    }
    await sql.connect(databaseConnection);
    let result = await sql.query`
    insert into Users(EmailAddress, PasswordHash, IsActive, LastLogin)
    values 
    (
        ${appAdminDto.EmailAddress},
        HASHBYTES('SHA2_512', ${appAdminDto.Password}),
        ${appAdminDto.IsActive},
        ${appAdminDto.LastLogin}
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
        where Name='ApplicationAdmin'
    );
        
    insert into SecurityGroupMember(UserId, GroupId, SchoolId)
    values
    (
        @uid,
        @gid,
        null
    )`;

    result = await sql.query`
        select top 1 UserId, GroupId, SchoolId
            from SecurityGroupMember;`

    return result.recordset;
}

async function deleteById(userId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        delete
            from SecurityGroupMember
        where UserId=${userId};
        
        delete u
            from Users u
            left outer join Persons p on p.UserId = u.Id
        where u.Id = ${userId} and p.Id is null;`;

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`No application admin with user ID= ${userId} !`);
        error.status = 500;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    getAppAdminByUserId,
    getAppAdminByEmailAddress,
    listAllAppAdmins,
    listPaged,
    createAppAdmin,
    deleteById
}