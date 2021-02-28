const sql = require('mssql');
const { databaseConnection } = require('../config');

async function getSchoolAdminByEmailAddress(email) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
    select SchoolId, UserId, EmailAddress, Name
        from SchoolAdmins sa
        inner join Users u on u.Id = sa.UserId
        inner join Schools s on s.Id = sa.SchoolId
    where u.EmailAddress = ${email};`;

    return result.recordset[0];
}

module.exports = {
    getSchoolAdminByEmailAddress
}