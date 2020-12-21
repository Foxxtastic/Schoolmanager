const sql = require('mssql');
const { databaseConnection } = require('../config');

async function listAllSchools() {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select Id, Name, Country, City, Address
        from dbo.Schools`;

    return result.recordset;
}

async function createSchool(schoolDto) {
    await sql.connect(databaseConnection);
    let result = await sql.query`
        insert into dbo.Schools(Id, Name, Country, City, Address)
        values (${schoolDto.Id}, ${schoolDto.Name}, ${schoolDto.Country}, ${schoolDto.City}, ${schoolDto.Address})`;

    result = await sql.query`
        select top 1 Id, Name, Manufacturer
        from dbo.Products
        order by Id desc`;

    return result.recordset;
}

module.exports = {
    listAllSchools
}