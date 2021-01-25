-- How to rename:
--exec sp_rename 'SCHOOL', 'School'


-- How to reseed identity column:
--DBCC CHECKIDENT ('School', RESEED, 1)

select t.Id, PersonId, FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, ma.Name from Teachers t
inner join Persons p
on t.PersonId = p.Id
inner join MajorTeacher m
on m.TeacherId = t.Id
inner join Majors ma
on ma.Id = m.MajorId