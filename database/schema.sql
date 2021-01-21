USE [master]
GO

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'SchoolManagement')
BEGIN
	CREATE DATABASE [SchoolManagement]
	CONTAINMENT = NONE
	COLLATE HUNGARIAN_CI_AS
END
GO

USE SchoolManagement

IF (NOT EXISTS (SELECT * 
                FROM INFORMATION_SCHEMA.TABLES 
                WHERE TABLE_SCHEMA = 'dbo' 
                AND  TABLE_NAME = 'Schools'))
BEGIN
	Create TABLE dbo.Schools (
		Id int NOT NULL IDENTITY(1,1)
			CONSTRAINT PK_Schools PRIMARY KEY,
		EduId nvarchar(20) NOT NULL,
		Name nvarchar(100) NOT NULL,
		Country nvarchar(100) NOT NULL,
		City nvarchar(100) NOT NULL,
		Address nvarchar (100) NOT NULL
	);
END

IF (NOT EXISTS (SELECT * 
                FROM INFORMATION_SCHEMA.TABLES 
                WHERE TABLE_SCHEMA = 'dbo' 
                AND  TABLE_NAME = 'Users'))
BEGIN
	CREATE TABLE dbo.Users (
		Id int NOT NULL IDENTITY(1,1)
			CONSTRAINT PK_Users PRIMARY KEY,
		EmailAddress nvarchar (100) NOT NULL
			CONSTRAINT UQ_EmailAddress UNIQUE,
		PasswordHash binary(64) NOT NULL,
		IsActive bit NOT NULL,
		LastLogin date
	);
END

IF (NOT EXISTS (SELECT * 
                FROM INFORMATION_SCHEMA.TABLES 
                WHERE TABLE_SCHEMA = 'dbo' 
                AND  TABLE_NAME = 'Persons'))
BEGIN
	Create TABLE dbo.Persons (
		Id int NOT NULL IDENTITY(1,1)
			CONSTRAINT PK_Persons PRIMARY KEY,
		FirstName nvarchar(50) NOT NULL,
		LastName nvarchar(50) NOT NULL,
		BirthDate date NOT Null,
		Nationality nvarchar(100) NOT Null,
		SecondNationality nvarchar(100),
		City nvarchar(100),
		Address nvarchar (100),
		UserId int NOT NULL
			CONSTRAINT FK_Persons_UserId
			REFERENCES Users(Id)
	);
END

IF (NOT EXISTS (SELECT * 
                FROM INFORMATION_SCHEMA.TABLES 
                WHERE TABLE_SCHEMA = 'dbo' 
                AND  TABLE_NAME = 'Majors'))
BEGIN
	CREATE TABLE dbo.Majors(
		Id int NOT NULL IDENTITY(1,1)
			CONSTRAINT PK_Majors PRIMARY KEY,
		Name nvarchar (50) NOT NULL
	);    
END

IF (NOT EXISTS (SELECT * 
                FROM INFORMATION_SCHEMA.TABLES 
                WHERE TABLE_SCHEMA = 'dbo' 
                AND  TABLE_NAME = 'Teachers'))
BEGIN
	CREATE TABLE dbo.Teachers (
		Id int NOT NULL IDENTITY(1,1)
			CONSTRAINT PK_Teachers PRIMARY KEY,
		PersonId int NOT NULL
			CONSTRAINT FK_Teachers_PersonId
			REFERENCES Persons(Id)
	);    
END

IF (NOT EXISTS (SELECT * 
                FROM INFORMATION_SCHEMA.TABLES 
                WHERE TABLE_SCHEMA = 'dbo' 
                AND  TABLE_NAME = 'MajorTeacher'))
BEGIN
	CREATE TABLE dbo.MajorTeacher (
		MajorId int NOT NULL
			CONSTRAINT FK_MajorTeacher_MajorId
			REFERENCES Majors(Id),
		TeacherId int NOT NULL
			CONSTRAINT FK_MajorTeacher_TeacherId
			REFERENCES Teachers(Id),
		 CONSTRAINT PK_MajorTeacher PRIMARY KEY NONCLUSTERED ([MajorId], [TeacherId])
			 
	);    
END

IF (NOT EXISTS (SELECT * 
                FROM INFORMATION_SCHEMA.TABLES 
                WHERE TABLE_SCHEMA = 'dbo' 
                AND  TABLE_NAME = 'Students'))
BEGIN
	CREATE TABLE dbo.Students (
		Id int NOT NULL IDENTITY(1,1)
			CONSTRAINT PK_Students PRIMARY KEY,
		StartDate date NOT NULL,
		ActiveStatus bit NOT NULL,
		PersonId int NOT NULL
			CONSTRAINT FK_Students_PersonId
			REFERENCES Persons(Id)
	);    
END

IF (NOT EXISTS (SELECT * 
                FROM INFORMATION_SCHEMA.TABLES 
                WHERE TABLE_SCHEMA = 'dbo' 
                AND  TABLE_NAME = 'SchoolTeacher'))
BEGIN
	CREATE TABLE dbo.SchoolTeacher (
		SchoolId int NOT NULL
			CONSTRAINT PK_SchoolTeacher_SchoolId
			REFERENCES Schools(Id),
		
		TeacherId int NOT NULL
			CONSTRAINT PK_SchoolTeacher_TeacherId
			REFERENCES Teachers(Id),
		CONSTRAINT PK_SchoolTeacher PRIMARY KEY NONCLUSTERED ([SchoolId], [TeacherId])
	);    
END

IF (NOT EXISTS (SELECT * 
                FROM INFORMATION_SCHEMA.TABLES 
                WHERE TABLE_SCHEMA = 'dbo' 
                AND  TABLE_NAME = 'SchoolStudent'))
BEGIN
	CREATE TABLE dbo.SchoolStudent (
		SchoolId int NOT NULL
			CONSTRAINT PK_SchoolStudent_SchoolId
			REFERENCES Schools(Id),
		
		StudentId int NOT NULL
			CONSTRAINT PK_SchoolStudent_StudentId
			REFERENCES Students(Id),
		CONSTRAINT PK_SchoolStudent PRIMARY KEY NONCLUSTERED ([SchoolId], [StudentId])
	);    
END