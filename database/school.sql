USE SchoolManagement

Create TABLE dbo.SCHOOL (
id nchar(20) NOT NULL,
NAME nchar(100) NOT NULL,
COUNTRY nchar(100) NOT NULL,
CITY nvarchar(100) NOT NULL,
ADDRESS nvarchar (100),
PRIMARY KEY (id)
);

INSERT INTO [DBO].[SCHOOL]
VALUES ('031603','Neumann János Középiskola','Hungary','Eger','Rákóczi út 48.'),
	   ('15823443206','Kiss ferenc Erdészeti Technikum','Hungary','Szeged','József Attila tér 6721.'),
	   ('120606','Kőrösi Csoma Sándor Gimnázium, Szakközép-, Szakképző Iskola és Kollégium','Hungary','Hajdúnánás','Bocskai utca 29.'),
	   ('FI 80798','Eötvös Loránd University','Hungary','Budapest','Egyetem tér 1-3.'),
	   ('FI 23344','Budapest University of Technology and Economics','Hungary','Budapest','Műegyetem rkp. 3.')

CREATE TABLE dbo.Teacher (
id int NOT NULL IDENTITY(1,1) PRIMARY KEY,
typeId nchar (100),
);