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
                AND  TABLE_NAME = 'Teachers'))
BEGIN
	CREATE TABLE dbo.Teachers (
		Id int NOT NULL IDENTITY(1,1)
			CONSTRAINT PK_Teachers PRIMARY KEY,
		TypeId nvarchar (100),
	);    
END