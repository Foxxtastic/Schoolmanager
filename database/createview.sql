CREATE OR ALTER VIEW [dbo].[vAppAdmins] AS
SELECT u.Id AS [UserId], u.EmailAddress
FROM [dbo].[Users] u
INNER JOIN [dbo].[SecurityGroupMember] sgm ON sgm.UserId = u.Id
INNER JOIN [dbo].[SecurityGroup] sg ON sg.Id = sgm.GroupId
WHERE sg.Name = 'ApplicationAdmin'

CREATE OR ALTER VIEW [dbo].[vSchoolAdmins] AS
SELECT sgm.SchoolId, u.Id AS [UserId]
FROM [dbo].[SecurityGroup] sg
INNER JOIN [dbo].[SecurityGroupMember] sgm ON sgm.GroupId = sg.Id
INNER JOIN [dbo].[Users] u ON u.Id = sgm.UserId
WHERE sg.[Name] = 'SchoolAdmin'