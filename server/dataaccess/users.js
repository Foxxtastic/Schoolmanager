const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getUserById(userId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Id, EmailAddress, PasswordHash, IsActive, LastLogin
        from dbo.Users
        where Id = ${userId}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    if (result.recordset.length !== 1) {
        throw new Error(`More than one record with Id ${userId}`)
    }

    return result.recordset[0];
}

async function getUserByEmailAddress(userEmail) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Id, EmailAddress, PasswordHash, IsActive, LastLogin
        from dbo.Users
        where EmailAddress = ${userEmail}`;

    if (result.recordset.length === 0) {
        return undefined;
    }

    if (result.recordset.length !== 1) {
        throw new Error(`More than one record with Email Address ${userEmail}`)
    }

    return result.recordset[0];
}

async function listAllUsers(sortingProperty = 'Id', isAscending = true, filterProperty = 'EmailAddress', filter = '') {
    await sql.connect(databaseConnection);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const result = await sql.query`
    with usersWithRowNum AS
        (
            select
            *,
            row_number() over(
                order by
                    case ${sortingProperty}
                        when 'Id'                   then convert(nvarchar(max), Id)
                        when 'EmailAddress'         then convert(nvarchar(max), EmailAddress)
                        when 'IsActive'             then convert(nvarchar(max), IsActive)
                        when 'LastLogin'            then convert(nvarchar(max), LastLogin)
                    end
            ) as RowNum
            from
                Users
        )
    select Id, EmailAddress, IsActive, LastLogin
    from
    usersWithRowNum
    where 
            case ${filterProperty}
    when 'Id'                   then convert(nvarchar(max), Id)
    when 'EmailAddress'         then convert(nvarchar(max), EmailAddress)
    when 'IsActive'             then convert(nvarchar(max), IsActive)
    when 'LastLogin'            then convert(nvarchar(max), LastLogin)
    end
    like '%' + ${filter} +'%'
    order by
    RowNum * ${isAscendingParam} `;

    return {
        items: result.recordset,
        allItemsCount: result.recordset.length
    };
}

async function listPaged(pageNumber, pageSize, sortingProperty = 'Id', isAscending = true, filterProperty = 'EmailAddress', filter = '') {
    await sql.connect(databaseConnection);
    const offset = (pageNumber === '0') ? 0 : (pageNumber - 1) * pageSize;
    const pageSizeAsNumber = parseInt(pageSize, 10);
    const isAscendingParam = isAscending === true ? 1 : -1;

    const pageResult = await sql.query`
    with usersWithRowNum AS
        (
            select
            *,
            row_number() over(
                order by
                    case ${sortingProperty}
                        when 'Id'                   then convert(nvarchar(max), Id)
                        when 'EmailAddress'         then convert(nvarchar(max), EmailAddress)
                        when 'IsActive'             then convert(nvarchar(max), IsActive)
                        when 'LastLogin'            then convert(nvarchar(max), LastLogin)
                    end
            ) as RowNum
            from
                Users
        )
    select Id, EmailAddress, IsActive, LastLogin
    from
    usersWithRowNum
    where 
            case ${filterProperty}
    when 'Id'                   then convert(nvarchar(max), Id)
    when 'EmailAddress'         then convert(nvarchar(max), EmailAddress)
    when 'IsActive'             then convert(nvarchar(max), IsActive)
    when 'LastLogin'            then convert(nvarchar(max), LastLogin)
    end
    like '%' + ${filter} +'%'
    order by
    RowNum * ${isAscendingParam}
    offset ${offset} rows
    fetch next ${pageSizeAsNumber} rows only; `

    const countResult = await sql.query`
    with usersWithFilter as
    (
        select Id, EmailAddress, IsActive, LastLogin
    from
    Users
    where 
                case ${filterProperty}
    when 'Id'                   then convert(nvarchar(max), Id)
    when 'EmailAddress'         then convert(nvarchar(max), EmailAddress)
    when 'IsActive'             then convert(nvarchar(max), IsActive)
    when 'LastLogin'            then convert(nvarchar(max), LastLogin)
    end
    like '%' + ${filter} +'%'
        )
    select count(*) as Count
    from usersWithFilter`

    const count = countResult.recordset[0].Count;

    return {
        items: pageResult.recordset,
        allItemsCount: count
    };
}

async function createUser(userDto) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
    insert into dbo.Users(EmailAddress, PasswordHash, IsActive, LastLogin)
    values(
        ${userDto.EmailAddress},
        HASHBYTES('SHA2_512', '${userDto.Password}'),
        ${userDto.IsActive},
        ${userDto.LastLogin})`;

    result = await sql.query`
    select top 1 Id, EmailAddress, PasswordHash, IsActive, LastLogin
    from dbo.Users
    order by Id desc`;

    return result.recordset;
}

async function updateUser(id, userDto) {
    const user = await getUserById(id);

    if (user === undefined) {
        const error = new Error(`No User with Id = ${id} !`);
        error.status = 404;
        throw error;
    }

    await sql.connect(databaseConnection);

    result = await sql.query`
    update dbo.Users
    set
    EmailAddress = ${userDto.EmailAddress},
    PasswordHash = HASHBYTES('SHA2_512', '${userDto.Password}'),
        IsActive = ${userDto.IsActive},
    LastLogin = ${userDto.LastLogin}
    where
    Id = ${id} `;

    return await getUserById(id);
}

async function deleteById(userId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
    delete u
    from dbo.Users u
    left outer join dbo.Persons p on p.UserId = u.Id
    where u.Id = ${userId} and p.Id is null`

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`There is a Person with ${userId} or, no User with Id = ${userId} !`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    getUserById,
    getUserByEmailAddress,
    listAllUsers,
    listPaged,
    createUser,
    deleteById,
    updateUser
}