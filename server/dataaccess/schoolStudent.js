const sql = require('mssql');
const { databaseConnection } = require('../config');

async function assignStudentToSchool(schoolId, studentsToAssignDto) {
    await sql.connect(databaseConnection);

    const table = new sql.Table('SchoolStudent');
    table.create = false;
    table.columns.add('SchoolId', sql.Int, { nullable: false });
    table.columns.add('StudentId', sql.Int, { nullable: false });
    studentsToAssignDto.forEach(studentId => {
        table.rows.add(schoolId, studentId);
    });

    const request = new sql.Request();
    const bulkResult = await request.bulk(table);
    return bulkResult.rowsAffected[0];
}

async function deassignStudentFromSchool(schoolId, studentsToDeassignDto) {

    const studentIds = studentsToDeassignDto;

    let result = await sql.query`
        delete from SchoolStudent
        where StudentId in
        (
            select StudentId
            from SchoolStudent
            where StudentId in (${studentIds})
        )
        and SchoolId = ${schoolId};`;

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`No Students with Ids = ${studentIds} or no School with id = ${schoolId} !`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    assignStudentToSchool,
    deassignStudentFromSchool
}