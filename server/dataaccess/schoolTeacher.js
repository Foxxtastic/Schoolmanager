const sql = require('mssql');
const { databaseConnection } = require('../config');

async function assignTeacherToSchool(schoolId, teachersToAssignDto) {
    await sql.connect(databaseConnection);

    const table = new sql.Table('SchoolTeacher');
    table.create = false;
    table.columns.add('SchoolId', sql.Int, { nullable: false });
    table.columns.add('TeacherId', sql.Int, { nullable: false });
    teachersToAssignDto.forEach(teacherId => {
        table.rows.add(schoolId, teacherId);
    });

    const request = new sql.Request();
    const bulkResult = await request.bulk(table);
    return bulkResult.rowsAffected[0];
}

async function deassignTeacherFromSchool(schoolId, teachersToDeassignDto) {

    const teacherIds = teachersToDeassignDto;

    let result = await sql.query`
        delete from SchoolTeacher
        where TeacherId in
        (
            select TeacherId
            from SchoolTeacher
            where TeacherId in (${teacherIds})
        )
        and SchoolId = ${schoolId};`;

    if (result.rowsAffected[0] === 0) {
        const error = new Error(`No Teachers with Ids = ${teacherIds} or no School with id = ${schoolId} !`);
        error.status = 404;
        throw error;
    }

    return result.rowsAffected[0];
}

module.exports = {
    assignTeacherToSchool,
    deassignTeacherFromSchool
}