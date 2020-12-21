const sql = require('mssql');
const { databaseConnection } = require('../config');

async function listAllSchools() {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Id, Name, Country, City, Address
        from dbo.School`;

    return result.recordset;
}

module.exports = {
    listAllSchools
}