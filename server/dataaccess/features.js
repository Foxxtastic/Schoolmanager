const sql = require('mssql');
const { databaseConnection } = require('../config');

function mapParameters(securityGroupMember) {
    if (securityGroupMember.IsSchoolRelated) {
        return {
            schoolId: securityGroupMember.SchoolId ? securityGroupMember.SchoolId.toString() : null
        };
    }

    return null;
}

async function getFeatures(userId) {
    await sql.connect(databaseConnection);
    const result = await sql.query`
        select f.[Name], sg.[IsSchoolRelated], sgm.[SchoolId]
        from dbo.SecurityGroupMember sgm
        inner join dbo.SecurityGroup sg on sg.Id = sgm.GroupId
        inner join dbo.SecurityGroupFeature sgf on sgf.GroupId = sg.Id
        inner join dbo.Feature f on f.Id = sgf.FeatureId
        where sgm.UserId = ${userId}`;

    if (result.recordset.length === 0) {
        return [];
    }

    return result.recordset.map(_ => ({
        name: _.Name,
        parameters: mapParameters(_)
    }));
}

module.exports = {
    getFeatures
}