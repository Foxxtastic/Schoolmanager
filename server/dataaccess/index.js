const sql = require('mssql');
const { databaseConnection } = require('../config');

async function listAllSchools() {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Idx, Id, Name, Country, City, Address
        from dbo.Schools`;

    return result.recordset;
}

async function createSchool(schoolDto) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
        insert into dbo.Schools(Id, Name, Country, City, Address)
        values (${schoolDto.Id}, ${schoolDto.Name}, ${schoolDto.Country}, ${schoolDto.City}, ${schoolDto.Address})`;

    result = await sql.query`
        select top 1 Idx, Id, Name, Country, City, Address
        from dbo.Schools
        order by Idx desc`;

    return result.recordset;
}

async function deleteByIdx(schoolIdx) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        delete
        from dbo.Schools
        where Idx = ${schoolIdx}`;

    if (result.rowsAffected === 0) {
        const error = new Error(`No Product with Idx = ${idx}!`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected;
}
module.exports = {
    listAllSchools,
    createSchool,
    deleteByIdx
}