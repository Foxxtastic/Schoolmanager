INSERT INTO [DBO].[Schools](EduId, Name, Country, City, Address)
VALUES ('031603','Neumann János Középiskola','Hungary','Eger','Rákóczi út 48.'),
	   ('15823443206','Kiss ferenc Erdészeti Technikum','Hungary','Szeged','József Attila tér 6721.'),
	   ('120606','Kőrösi Csoma Sándor Gimnázium, Szakközép-, Szakképző Iskola és Kollégium','Hungary','Hajdúnánás','Bocskai utca 29.'),
	   ('FI 80798','Eötvös Loránd University','Hungary','Budapest','Egyetem tér 1-3.'),
	   ('FI 23344','Budapest University of Technology and Economics','Hungary','Budapest','Műegyetem rkp. 3.'),
	   ('CZ 12345','University of New York in Prague','Chechia','Praha','Londýnská 41'),
	   ('FR 12322','Ecole Maternelle Publique, RPI','France','Longchamp','2 Place Deleglise'),
	   ('CH_LZ 23444','KV Luzern Berufsakademie / Höhere Fachschule für Wirtschaft, Marketing und Wirtschaftsinformatik','Schweiz','Luzern','Dreilindenstrasse 20'),
	   ('AT 22222','Pädagogische Hochschule Steiermark Graz','Austria','Graz','Hasnerplatz 12'),
	   ('UK 11223','Camphill School Aberdeen','United Kingdom','Aberdeen','Murtle House, Bieldside, AB15 9EP'),
	   ('UK 22555','Stranraer Academy','United Kingdom','Stranraer','McMasters Road, DG9 8BY'),
	   ('PL 00992','Szkoła Języków i Zarządzania Nauczycielskie Kolegium Języków Obcych PROMAR','Poland','Rzeszów','Bohaterów 12'),
	   ('IT 10200','CAVOUR','Italy','Firenze','V.LE Machiavelli, 31-33'),
	   ('IT 11340','Centro Scolastico Dante Alighieri','Italy','Quarto','Via Campana 383'),
	   ('01131710376','ALMA MATER STUDIORUM - Università di Bologna','Italy','Bologna','Via Zamboni, 33'),
	   ('OX1 2JD','University of Oxford','United Kingdom','Oxford','Wellington Square'),
	   ('CH_BS 11000','University of Basel','Schweiz','Basel','Petersplatz 1'),
	   ('DE 01100','Hochschule für Grafik und Buchkunst Leipzig','Germany','Leipzig','Wächterstraße 11'),
	   ('DE 01200','Technische Universität Dresden','Germany','Dresden','Mommsenstraße 7'),
	   ('DE 01300','Berufsakademie (BA) Sachsen - Staatliche Studienakademie Dresden','Germany','Dresden','Hans-Grundig-Straße 25'),
	   ('FR 12400','Universite Clermont 2, Moulins','France','Mills','BOULEVARD Nomazy')

INSERT INTO [dbo].[Users] (EmailAddress, PasswordHash, IsActive, LastLogin)
VALUES ('admin@schools.com', HASHBYTES('SHA2_512', 'ad52mAx17y'), 1, NULL),
	   ('zsolt@schools.com', HASHBYTES('SHA2_512', 'zs99Ca47yo'), 1, NULL),
	   ('mihaly.csombor@hajdunanas.com', HASHBYTES('SHA2_512', 'td62zsydwz'), 1, NULL),
	   ('katalin.hajdu@hajdunanas.com', HASHBYTES('SHA2_512', 'gg11amohdb'), 1, NULL),
	   ('aniko.kelemen@hajunanas.com', HASHBYTES('SHA2_512', 'gi13mywjvy'), 1, NULL),
	   ('robert.puzser@budapest.com', HASHBYTES('SHA2_512', 'vm82czvmpq'), 1, NULL),
	   ('janos.kovacs@budapest.com', HASHBYTES('SHA2_512', 'yr99crjcwn'), 1, NULL),
	   ('janos.kadar@budapest.com', HASHBYTES('SHA2_512', 'wl59roykfe'), 1, NULL),
	   ('barbara.barna@budapest.com', HASHBYTES('SHA2_512', 'by38ecserb'), 1, NULL),
	   ('ervin.nagy@budaors.com', HASHBYTES('SHA2_512', 'ps62hjxwgb'), 1, NULL),
	   ('tunde.kobzos@budapest.com', HASHBYTES('SHA2_512', 'cn79ksaxfp'), 1, NULL),
	   ('ivan.szakaly@szeged.com', HASHBYTES('SHA2_512', 'xm68iyvlmw'), 1, NULL),
	   ('andrea.szel@szeged.com', HASHBYTES('SHA2_512', 'ha79dsgptn'), 1, NULL),
	   ('laszlo.favago@szeged.com', HASHBYTES('SHA2_512', 'io31fnelej'), 1, NULL),
	   ('farkas.beke@eger.com', HASHBYTES('SHA2_512', 'ys43nhidey'), 1, NULL),
	   ('elemer.soos@eger.com', HASHBYTES('SHA2_512', 'tz60tibscq'), 1, NULL),
	   ('marianna.szakacs@eger.com', HASHBYTES('SHA2_512', 'eq39cgeqxv'), 1, NULL),
	   ('lubomir.cermak@praha.com', HASHBYTES('SHA2_512', 'se57ohvuqh'), 1, NULL),
	   ('kvetoslav.kovac@praha.com', HASHBYTES('SHA2_512', 'fq65ridvop'), 1, NULL),
	   ('nina.novak@praha.com', HASHBYTES('SHA2_512', 'kx84zzenrt'), 1, NULL),
	   ('alfred.hlavacek@praha.com', HASHBYTES('SHA2_512', 'by60drfycp'), 1, NULL),
	   ('thomas.wolf@graz.com', HASHBYTES('SHA2_512', 'iv73zspgaq'), 1, NULL),
	   ('zuzanna.ostrowski@graz.com', HASHBYTES('SHA2_512', 'hi66lgoyin'), 1, NULL),
	   ('gunther.bieber@graz.com', HASHBYTES('SHA2_512', 'yp69sbqzsv'), 1, NULL),
	   ('ruedi.kaufmann@dresden.com', HASHBYTES('SHA2_512', 'eo98mqaxbe'), 1, NULL),
	   ('kristin.muller@dresden.com', HASHBYTES('SHA2_512', 'fv56hpekyb'), 1, NULL),
	   ('simon.hofmann@leipzig.com', HASHBYTES('SHA2_512', 'yb71tuqfsz'), 1, NULL),
	   ('roger.burgstaller@leipzig.com', HASHBYTES('SHA2_512', 'cj34koqlsq'), 1, NULL),
	   ('rudinger.hahn@bannerwitz.com', HASHBYTES('SHA2_512', 'nf8ovasdu'), 1, NULL),
	   ('aniko.toth@hajdunanas.com', HASHBYTES('SHA2_512', 'oj36jgnice'), 1, NULL),
	   ('veronika.szoke@hajdunanas.com', HASHBYTES('SHA2_512', 'wy14wxkemq'), 1, NULL),
	   ('szabina.illes@hajdunanas.com', HASHBYTES('SHA2_512', 'qs59fjackd'), 1, NULL),
	   ('viktoria.dobos@hajdunanas.com', HASHBYTES('SHA2_512', 'tv15vzlepl'), 1, NULL),
	   ('ivett.kozma@hajdunanas.com', HASHBYTES('SHA2_512', 'pe68nduute'), 1, NULL),
	   ('orsolya.pataki@hajdunanas.com', HASHBYTES('SHA2_512', 'sd12mxkpke'), 1, NULL),
	   ('dorina.gaspar@hajdunanas.com', HASHBYTES('SHA2_512', 'iw52zftxmv'), 1, NULL),
	   ('eva.halasz@hajdunanas.com', HASHBYTES('SHA2_512', 'au61cmglez'), 1, NULL),
	   ('evelin.orosz@hajdunanas.com', HASHBYTES('SHA2_512', 'qt26apggjn'), 1, NULL),
	   ('adel.biro@hajdunanas.com', HASHBYTES('SHA2_512', 'dy4rwwdqa'), 1, NULL),
	   ('oliver.orban@hajdunanas.com', HASHBYTES('SHA2_512', 'lx85zxwyyy'), 1, NULL),
	   ('geza.bogdan@hajdunanas.com', HASHBYTES('SHA2_512', 'ny20eqvypc'), 1, NULL),
	   ('kevin.kiraly@hajdunanas.com', HASHBYTES('SHA2_512', 'uu29mctpqe'), 1, NULL),
	   ('tamas.aprod@hajdunanas.com', HASHBYTES('SHA2_512', 'gv87akkgft'), 1, NULL),
	   ('dezso.bakos@hajdunanas.com', HASHBYTES('SHA2_512', 'iq42ptprch'), 1, NULL),
	   ('jozsef.sandor@hajdunanas.com', HASHBYTES('SHA2_512', 'ge17dytucn'), 1, NULL),
	   ('gergo.toth@hajdunanas.com', HASHBYTES('SHA2_512', 'qn49qeecad'), 1, NULL),
	   ('gergely.kerekes@hajdunanas.com', HASHBYTES('SHA2_512', 'mi68shswtc'), 1, NULL),
	   ('marcell.hajdu@hajdunanas.com', HASHBYTES('SHA2_512', 'pz51jqjsmd'), 1, NULL),
	   ('lajos.gaspar@hajdunanas.com', HASHBYTES('SHA2_512', 'ge22xlutlg'), 1, NULL),
	   ('donat.kiraly@hajdunanas.com', HASHBYTES('SHA2_512', 'lq59tzepri'), 1, NULL),
	   ('gyorgy.voros@hajdunanas.com', HASHBYTES('SHA2_512', 'kv78onjycz'), 1, NULL),
	   ('armin.juhasz@hajudorog.com', HASHBYTES('SHA2_512', 'yx12jrmzoq'), 1, NULL),
	   ('viktor.juhasz@hajudorog.com', HASHBYTES('SHA2_512', 'xx15pjxrhu'), 1, NULL),
	   ('balazs.borbely@hajudorog.com', HASHBYTES('SHA2_512', 'pv84gbsidy'), 1, NULL),
	   ('oliver.laszlo@hajudorog.com', HASHBYTES('SHA2_512', 'tm23txklyp'), 1, NULL),
	   ('bendeguz.bakos@hajudorog.com', HASHBYTES('SHA2_512', 'cx18rundyd'), 1, NULL),
	   ('renato.torok@hajdunanas.com', HASHBYTES('SHA2_512', 'ye0vldyzi'), 1, NULL),
	   ('barnabas.novak@hajdunanas.com', HASHBYTES('SHA2_512', 'gm99mytqiq'), 1, NULL),
	   ('milan.kiss@hajdunanas.com', HASHBYTES('SHA2_512', 'sw66sfuyau'), 1, NULL),
	   ('laura.borbely@hajdunanas.com', HASHBYTES('SHA2_512', 'wy35rspnwi'), 1, NULL),
	   ('hajnalka.nemeth@budapest.com', HASHBYTES('SHA2_512', 'ty89okoika'), 1, NULL),
	   ('maria.szekely@budapest.com', HASHBYTES('SHA2_512', 'sl2hgiwrf'), 1, NULL),
	   ('szabina.vincze@budapest.com', HASHBYTES('SHA2_512', 'dw59oksjng'), 1, NULL),
	   ('lilla.olah@budapest.com', HASHBYTES('SHA2_512', 'fg28bqawvi'), 1, NULL),
	   ('sara.peter@budapest.com', HASHBYTES('SHA2_512', 'kp47dxsbly'), 1, NULL),
	   ('anita.fodor@mezômegyer.com', HASHBYTES('SHA2_512', 'vl53ovdnca'), 1, NULL),
	   ('benedek.szalai@budapest.com', HASHBYTES('SHA2_512', 'zy61nlpluc'), 1, NULL),
	   ('laszlo.horvath@budapest.com', HASHBYTES('SHA2_512', 'oz94mjmvbh'), 1, NULL),
	   ('bertalan.feher@dunaszeg.com', HASHBYTES('SHA2_512', 'co50uzalss'), 1, NULL),
	   ('botond.lukacs@belapatfalva.com', HASHBYTES('SHA2_512', 'ir23xlbtgl'), 1, NULL),
	   ('ferenc.bogdan@budapest.com', HASHBYTES('SHA2_512', 'pj95roqckx'), 1, NULL),
	   ('csaba.gaspar@budapest.com', HASHBYTES('SHA2_512', 'bu89xpdlxc'), 1, NULL),
	   ('csongor.kelemen@nagybatony.com', HASHBYTES('SHA2_512', 'vy73ejyoxl'), 1, NULL),
	   ('patrik.balla@budapest.com', HASHBYTES('SHA2_512', 'fs0oxajze'), 1, NULL),
	   ('dominik.magyar@budapest.com', HASHBYTES('SHA2_512', 'yc58ojsblc'), 1, NULL),
	   ('levente.sipos@budapest.com', HASHBYTES('SHA2_512', 'zr57wjxrae'), 1, NULL),
	   ('zsofia.antal@budapest.com', HASHBYTES('SHA2_512', 'jy48rricci'), 1, NULL),
	   ('ildiko.gulyas@budapest.com', HASHBYTES('SHA2_512', 'na87grknih'), 1, NULL),
	   ('hajnalka.virag@monor.com', HASHBYTES('SHA2_512', 'ix85ouewuu'), 1, NULL),
	   ('anita.zobor@budapest.com', HASHBYTES('SHA2_512', 'if0tmwlba'), 1, NULL),
	   ('szabina.biro@lajosmizse.com', HASHBYTES('SHA2_512', 'tm96kxjenh'), 1, NULL),
	   ('fruzsina.papp@budapest.com', HASHBYTES('SHA2_512', 'kc32klmxiv'), 1, NULL),
	   ('cintia.veres@budapest.com', HASHBYTES('SHA2_512', 'mn24nlfiov'), 1, NULL),
	   ('csilla.balint@mezokovesd.com', HASHBYTES('SHA2_512', 'yg95usdkhn'), 1, NULL),
	   ('nora.fekete@pilisszentlaszlo.com', HASHBYTES('SHA2_512', 'bu2djohpt'), 1, NULL),
	   ('erika.vass@isaszeg.com', HASHBYTES('SHA2_512', 'bg85aufuxr'), 1, NULL),
	   ('milan.zobor@budapest.com', HASHBYTES('SHA2_512', 'km45usyglx'), 1, NULL),
	   ('krisztian.lengyel@budapest.com', HASHBYTES('SHA2_512', 'sb23qghygg'), 1, NULL),
	   ('geza.illes@budapest.com', HASHBYTES('SHA2_512', 'ef26nmckdl'), 1, NULL),
	   ('kristof.torok@budapest.com', HASHBYTES('SHA2_512', 'ob24swtraf'), 1, NULL),
	   ('dominik.torok@budapest.com', HASHBYTES('SHA2_512', 'bi77ffhoyp'), 1, NULL)

INSERT INTO [DBO].[Persons](FirstName, LastName, BirthDate, Nationality, SecondNationality, City, Address, UserId) 
SELECT 'Mihály', 'Csombor', '1974-12-17', 'Hungary', Null, 'Hajdúnánás', 'Erzsébet utca 44.', u.Id FROM Users u WHERE EmailAddress = 'mihaly.csombor@hajdunanas.com' UNION
SELECT 'Katalin', 'Hajdú', '1984-06-03', 'Hungary', Null, 'Hajdúnánás', 'Petőfi utca 11.', u.Id FROM Users u WHERE EmailAddress = 'katalin.hajdu@hajdunanas.com' UNION
SELECT 'Anikó', 'Kelemen', '2008-10-16', 'Hungary', Null, 'Hajdúnánás', 'Dorogi út 12.', u.Id FROM Users u WHERE EmailAddress = 'aniko.kelemen@hajunanas.com' UNION
SELECT 'Róbert', 'Puzsér', '1974-10-24', 'Hungary', Null, 'Budapest', 'Posztmodern út 1.', u.Id FROM Users u WHERE EmailAddress = 'robert.puzser@budapest.com' UNION
SELECT 'János', 'Kovács', '1965-06-12', 'Hungary', Null, 'Budapest', 'Blaha Lujza tér 12 2em/1', u.Id FROM Users u WHERE EmailAddress = 'janos.kovacs@budapest.com' UNION
SELECT 'János', 'Kádár', '1959-03-20', 'Hungary', Null, 'Budapest', 'Hősök tere', u.Id FROM Users u WHERE EmailAddress = 'janos.kadar@budapest.com' UNION
SELECT 'Barbara', 'Barna', '1990-04-11', 'Hungary', Null, 'Budapest', 'Vörös Tér 1.', u.Id FROM Users u WHERE EmailAddress = 'barbara.barna@budapest.com' UNION
SELECT 'Ervin', 'Nagy', '1983-02-15', 'Hungary', Null, 'Budaörs', 'Petőfi Sándor utca 5.', u.Id FROM Users u WHERE EmailAddress = 'ervin.nagy@budaors.com' UNION
SELECT 'Tünde', 'Kobzos', '1987-01-30', 'Hungary', Null, 'Budapest', 'Egry József u. 51. fsz/3', u.Id FROM Users u WHERE EmailAddress = 'tunde.kobzos@budapest.com' UNION
SELECT 'Iván', 'Szakály', '1979-11-08', 'Hungary', Null, 'Szeged', 'Szél utca 3 2em/4', u.Id FROM Users u WHERE EmailAddress = 'ivan.szakaly@szeged.com' UNION
SELECT 'Andrea', 'Szél', '1990-03-15', 'Hungary', Null, 'Szeged', 'Farkas utca 3em/1', u.Id FROM Users u WHERE EmailAddress = 'andrea.szel@szeged.com' UNION
SELECT 'László', 'Favágó', '1980-02-20', 'Hungary', Null, 'Szeged', 'Bolyai János utca 34.', u.Id FROM Users u WHERE EmailAddress = 'laszlo.favago@szeged.com' UNION
SELECT 'Farkas', 'Beke', '1992-07-21', 'Hungary', Null, 'Eger', 'Mátyás Király út 11 4em/2', u.Id FROM Users u WHERE EmailAddress = 'farkas.beke@eger.com' UNION
SELECT 'Elemér', 'Soós', '1988-11-03', 'Hungary', Null, 'Eger', 'II. Rákóczi Ferenc u. 19 3em/11', u.Id FROM Users u WHERE EmailAddress = 'elemer.soos@eger.com' UNION
SELECT 'Marianna', 'Szakács', '1986-02-24', 'Hungary', Null, 'Eger', 'Kallomallom út 12 fsz/2', u.Id FROM Users u WHERE EmailAddress = 'marianna.szakacs@eger.com' UNION
SELECT 'Lubomír', 'Cermak', '1986-02-24', 'Czech', Null, 'Praha', '24 Podedvorská', u.Id FROM Users u WHERE EmailAddress = 'lubomir.cermak@praha.com' UNION
SELECT 'Květoslav', 'Kovac', '1984-03-16', 'Czech', Null, 'Praha', '294 Podedvorská', u.Id FROM Users u WHERE EmailAddress = 'kvetoslav.kovac@praha.com' UNION
SELECT 'Nina', 'Novák', '1990-07-20', 'Czech', 'Hungary', 'Praha', '16 Šrobárova', u.Id FROM Users u WHERE EmailAddress = 'nina.novak@praha.com' UNION
SELECT 'Alfréd', 'Hlaváček', '1986-02-24', 'Czech', Null, 'Praha', '54 Žerotínova 4p/23', u.Id FROM Users u WHERE EmailAddress = 'alfred.hlavacek@praha.com' UNION
SELECT 'Thomas', 'Wolf', '1986-11-10', 'Austria', Null, 'Graz', '142 Alte Poststraße 2FB/2', u.Id FROM Users u WHERE EmailAddress = 'thomas.wolf@graz.com' UNION
SELECT 'Zuzanna', 'Ostrowski', '1986-08-21', 'Austria', 'Poland', 'Graz', '17 Eduard-Keil-Gasse', u.Id FROM Users u WHERE EmailAddress = 'zuzanna.ostrowski@graz.com' UNION
SELECT 'Günther', 'Bieber', '1973-11-01', 'Austria', 'Germany', 'Graz', '44 Brucknerstraße', u.Id FROM Users u WHERE EmailAddress = 'gunther.bieber@graz.com' UNION
SELECT 'Ruedi', 'Kaufmann', '1983-12-01', 'Germany', 'Austria', 'Dresden', 'Rosmaringasse 10', u.Id FROM Users u WHERE EmailAddress = 'ruedi.kaufmann@dresden.com' UNION
SELECT 'Kristin', 'Muller', '1991-10-06', 'Germany', 'France', 'Dresden', 'Seidnitzer Str. 13', u.Id FROM Users u WHERE EmailAddress = 'kristin.muller@dresden.com' UNION
SELECT 'Simon', 'Hofmann', '1978-09-30', 'Germany', Null, 'Leipzig', 'Mierendorffstraße 11 3FB/2', u.Id FROM Users u WHERE EmailAddress = 'simon.hofmann@leipzig.com' UNION
SELECT 'Roger', 'Burgstaller', '1971-03-31', 'Germany', Null, 'Leipzig', 'Paul-Gruner-Straße 50 1FB/1', u.Id FROM Users u WHERE EmailAddress = 'roger.burgstaller@leipzig.com' UNION
SELECT 'Rüdinger', 'Hahn', '1968-01-24', 'Germany', Null, 'Bannerwitz', 'Goppelner Straße 15', u.Id FROM Users u WHERE EmailAddress = 'rudinger.hahn@bannerwitz.com' UNION
SELECT 'Anikó', 'Tóth', '2010-06-14', 'Hungary', Null, 'Hajdúnánás', 'Hegyalja út 88.', u.Id FROM Users u WHERE EmailAddress = 'aniko.toth@hajdunanas.com' UNION
SELECT 'Veronika', 'Szőke', '2004-01-09', 'Hungary', Null, 'Hajdúnánás', 'Rákóczi út 15.', u.Id FROM Users u WHERE EmailAddress = 'veronika.szoke@hajdunanas.com' UNION
SELECT 'Szabina', 'Illés', '2009-05-02', 'Hungary', Null, 'Hajdúnánás', 'Hegyalja út 36.', u.Id FROM Users u WHERE EmailAddress = 'szabina.illes@hajdunanas.com' UNION
SELECT 'Viktória', 'Dobos', '2004-04-03', 'Hungary', Null, 'Hajdúnánás', 'Tompa u. 56.', u.Id FROM Users u WHERE EmailAddress = 'viktoria.dobos@hajdunanas.com' UNION
SELECT 'Ivett', 'Kozma', '2010-12-24', 'Hungary', Null, 'Hajdúnánás', 'Kálmán Imre u. 44.', u.Id FROM Users u WHERE EmailAddress = 'ivett.kozma@hajdunanas.com' UNION
SELECT 'Orsolya', 'Pataki', '2004-10-14', 'Hungary', Null, 'Hajdúnánás', 'Veres Pálné u. 61.', u.Id FROM Users u WHERE EmailAddress = 'orsolya.pataki@hajdunanas.com' UNION
SELECT 'Dorina', 'Gáspár', '2013-12-27', 'Hungary', Null, 'Hajdúnánás', 'Dayka Gábor u. 69.', u.Id FROM Users u WHERE EmailAddress = 'dorina.gaspar@hajdunanas.com' UNION
SELECT 'Éva', 'Halász', '2007-08-17', 'Hungary', Null, 'Hajdúnánás', 'Dorogi út 11.', u.Id FROM Users u WHERE EmailAddress = 'eva.halasz@hajdunanas.com' UNION
SELECT 'Evelin', 'Orosz', '2012-04-30', 'Hungary', Null, 'Hajdúnánás', 'Bocskai utca 13.', u.Id FROM Users u WHERE EmailAddress = 'evelin.orosz@hajdunanas.com' UNION
SELECT 'Adél', 'Biró', '2008-03-12', 'Hungary', Null, 'Hajdúnánás', 'Hunyadi utca 1.', u.Id FROM Users u WHERE EmailAddress = 'adel.biro@hajdunanas.com' UNION
SELECT 'Olivér', 'Orbán', '2013-01-15', 'Hungary', Null, 'Hajdúnánás', 'Kálvin út 10.', u.Id FROM Users u WHERE EmailAddress = 'oliver.orban@hajdunanas.com' UNION
SELECT 'Géza', 'Bogdán', '2011-12-20', 'Hungary', Null, 'Hajdúnánás', 'Luther utca 8.', u.Id FROM Users u WHERE EmailAddress = 'geza.bogdan@hajdunanas.com' UNION
SELECT 'Kevin', 'Király', '2006-11-16', 'Hungary', Null, 'Hajdúnánás', 'Mártírok útja 13 2em/3', u.Id FROM Users u WHERE EmailAddress = 'kevin.kiraly@hajdunanas.com' UNION
SELECT 'Tamás', 'Apród', '2012-12-21', 'Hungary', Null, 'Hajdúnánás', 'Mártírok útja 15 3em/12', u.Id FROM Users u WHERE EmailAddress = 'tamas.aprod@hajdunanas.com' UNION
SELECT 'Dezső', 'Bakos', '2011-04-15', 'Hungary', Null, 'Hajdúnánás', 'Mártírok útja 13 4em/14', u.Id FROM Users u WHERE EmailAddress = 'dezso.bakos@hajdunanas.com' UNION
SELECT 'József', 'Sándor', '2009-10-20', 'Hungary', Null, 'Hajdúnánás', 'Mártírok útja 15 1em/5', u.Id FROM Users u WHERE EmailAddress = 'jozsef.sandor@hajdunanas.com' UNION
SELECT 'Gergő', 'Tóth', '2012-12-28', 'Hungary', Null, 'Hajdúnánás', 'Damjanich utca 12.', u.Id FROM Users u WHERE EmailAddress = 'gergo.toth@hajdunanas.com' UNION
SELECT 'Gergely', 'Kerekes', '2010-05-27', 'Hungary', Null, 'Hajdúnánás', 'József Attila utca 8.', u.Id FROM Users u WHERE EmailAddress = 'gergely.kerekes@hajdunanas.com' UNION
SELECT 'Marcell', 'Hajdú', '2007-11-18', 'Hungary', Null, 'Hajdúnánás', 'Nagy Sándor utca 17.', u.Id FROM Users u WHERE EmailAddress = 'marcell.hajdu@hajdunanas.com' UNION
SELECT 'Lajos', 'Gáspár', '2009-08-08', 'Hungary', Null, 'Hajdúnánás', 'Liget utca 23.', u.Id FROM Users u WHERE EmailAddress = 'lajos.gaspar@hajdunanas.com' UNION
SELECT 'Donát', 'Király', '2006-07-11', 'Hungary', Null, 'Hajdúnánás', 'Liget utca 11.', u.Id FROM Users u WHERE EmailAddress = 'donat.kiraly@hajdunanas.com' UNION
SELECT 'György', 'Vörös', '2008-08-08', 'Hungary', Null, 'Hajdúnánás', 'Móricz Pál utca 12.', u.Id FROM Users u WHERE EmailAddress = 'gyorgy.voros@hajdunanas.com' UNION
SELECT 'Ármin', 'Juhász', '2013-02-21', 'Hungary', Null, 'HajúDorog', 'Nánási út 10. ', u.Id FROM Users u WHERE EmailAddress = 'armin.juhasz@hajudorog.com' UNION
SELECT 'Viktor', 'Juhász', '2011-12-10', 'Hungary', Null, 'HajúDorog', 'Nánási út 10. ', u.Id FROM Users u WHERE EmailAddress = 'viktor.juhasz@hajudorog.com' UNION
SELECT 'Balázs', 'Borbély', '2010-10-13', 'Hungary', Null, 'HajúDorog', 'Nánási út 20. ', u.Id FROM Users u WHERE EmailAddress = 'balazs.borbely@hajudorog.com' UNION
SELECT 'Olivér', 'László', '2011-08-20', 'Hungary', Null, 'HajúDorog', 'Nánási út 31. ', u.Id FROM Users u WHERE EmailAddress = 'oliver.laszlo@hajudorog.com' UNION
SELECT 'Bendegúz', 'Bakos', '2004-09-13', 'Hungary', Null, 'HajúDorog', 'Nánási út 5. ', u.Id FROM Users u WHERE EmailAddress = 'bendeguz.bakos@hajudorog.com' UNION
SELECT 'Renátó', 'Török', '2005-11-09', 'Hungary', Null, 'Hajdúnánás', 'Tinódi utca 32.', u.Id FROM Users u WHERE EmailAddress = 'renato.torok@hajdunanas.com' UNION
SELECT 'Barnabás', 'Novák', '2010-07-09', 'Hungary', Null, 'Hajdúnánás', 'Irányi utca 31.', u.Id FROM Users u WHERE EmailAddress = 'barnabas.novak@hajdunanas.com' UNION
SELECT 'Milán', 'Kiss', '2011-03-06', 'Hungary', Null, 'Hajdúnánás', 'Attila utca 51.', u.Id FROM Users u WHERE EmailAddress = 'milan.kiss@hajdunanas.com' UNION
SELECT 'Laura', 'Borbély', '2013-12-21', 'Hungary', Null, 'Hajdúnánás', 'Alma utca 2.', u.Id FROM Users u WHERE EmailAddress = 'laura.borbely@hajdunanas.com' UNION
SELECT 'Hajnalka', 'Németh', '1997-02-17', 'Hungary', Null, 'Budapest', 'Piroska u. 29.', u.Id FROM Users u WHERE EmailAddress = 'hajnalka.nemeth@budapest.com' UNION
SELECT 'Mária', 'Székely', '1999-02-18', 'Hungary', 'Slovakia', 'Budapest', 'Árpád fejedelem útja 83.', u.Id FROM Users u WHERE EmailAddress = 'maria.szekely@budapest.com' UNION
SELECT 'Szabina', 'Vincze', '1997-10-17', 'Hungary', Null, 'Budapest', 'Csabai kapu 63.', u.Id FROM Users u WHERE EmailAddress = 'szabina.vincze@budapest.com' UNION
SELECT 'Lilla', 'Oláh', '1998-09-02', 'Hungary', Null, 'Budapest', 'Petőfi utca 52. 3em/12.', u.Id FROM Users u WHERE EmailAddress = 'lilla.olah@budapest.com' UNION
SELECT 'Sára', 'Péter', '1998-06-11', 'Hungary', Null, 'Budapest', 'Nagytétényi út 35', u.Id FROM Users u WHERE EmailAddress = 'sara.peter@budapest.com' UNION
SELECT 'Anita', 'Fodor', '1995-09-11', 'Hungary', Null, 'Mezômegyer ', 'Veres Pálné u. 96. ', u.Id FROM Users u WHERE EmailAddress = 'anita.fodor@mezômegyer.com' UNION
SELECT 'Benedek', 'Szalai', '1996-11-18', 'Hungary', Null, 'Budapest', 'Baross tér 31. ', u.Id FROM Users u WHERE EmailAddress = 'benedek.szalai@budapest.com' UNION
SELECT 'László', 'Horváth', '2001-06-02', 'Hungary', Null, 'Budapest', 'Bem rkp. 38. ', u.Id FROM Users u WHERE EmailAddress = 'laszlo.horvath@budapest.com' UNION
SELECT 'Bertalan', 'Fehér', '1996-06-22', 'Hungary', Null, 'Dunaszeg', 'Bécsi utca 79. ', u.Id FROM Users u WHERE EmailAddress = 'bertalan.feher@dunaszeg.com' UNION
SELECT 'Botond', 'Lukács', '1999-11-22', 'Hungary', Null, 'Bélapátfalva ', 'Erzsébet tér 15. ', u.Id FROM Users u WHERE EmailAddress = 'botond.lukacs@belapatfalva.com' UNION
SELECT 'Ferenc', 'Bogdán', '1997-06-12', 'Hungary', 'Romania', 'Budapest', 'Tompa u. 64 ', u.Id FROM Users u WHERE EmailAddress = 'ferenc.bogdan@budapest.com' UNION
SELECT 'Csaba', 'Gáspár', '1998-04-29', 'Hungary', Null, 'Budapest', 'Szent Gellért tér 13. ', u.Id FROM Users u WHERE EmailAddress = 'csaba.gaspar@budapest.com' UNION
SELECT 'Csongor', 'Kelemen', '1998-06-02', 'Hungary', Null, 'Nagybátony ', 'Apáczai Csere János u. 58. ', u.Id FROM Users u WHERE EmailAddress = 'csongor.kelemen@nagybatony.com' UNION
SELECT 'Patrik', 'Balla', '1996-08-13', 'Hungary', Null, 'Budapest', 'Síp utca 53 ', u.Id FROM Users u WHERE EmailAddress = 'patrik.balla@budapest.com' UNION
SELECT 'Dominik', 'Magyar', '2002-09-10', 'Hungary', Null, 'Budapest', 'Szent Gellért tér 23. ', u.Id FROM Users u WHERE EmailAddress = 'dominik.magyar@budapest.com' UNION
SELECT 'Levente', 'Sípos', '1997-03-01', 'Hungary', Null, 'Budapest', 'Leonardo da Vinci utca 41', u.Id FROM Users u WHERE EmailAddress = 'levente.sipos@budapest.com' UNION
SELECT 'Zsófia', 'Antal', '1996-06-02', 'Hungary', 'Serbia', 'Budapest', 'Erzsébet tér 1 fsz/1', u.Id FROM Users u WHERE EmailAddress = 'zsofia.antal@budapest.com' UNION
SELECT 'Ildikó', 'Gulyás', '2001-01-11', 'Hungary', Null, 'Budapest', 'Kiss János altábornagy utca 12.', u.Id FROM Users u WHERE EmailAddress = 'ildiko.gulyas@budapest.com' UNION
SELECT 'Hajnalka', 'Virág', '2001-02-25', 'Hungary', Null, 'Monor', 'Kiss Ernő utca 9.', u.Id FROM Users u WHERE EmailAddress = 'hajnalka.virag@monor.com' UNION
SELECT 'Anita', 'Zobor', '1995-08-07', 'Hungary', Null, 'Budapest', 'Petrence utca 73.', u.Id FROM Users u WHERE EmailAddress = 'anita.zobor@budapest.com' UNION
SELECT 'Szabina', 'Biró', '1995-10-03', 'Hungary', Null, 'Lajosmizse', 'Ceglédi utca 21.', u.Id FROM Users u WHERE EmailAddress = 'szabina.biro@lajosmizse.com' UNION
SELECT 'Fruzsina', 'Papp', '1995-05-07', 'Hungary', Null, 'Budapest', 'Csíkhegyi utca 32. 3em/10', u.Id FROM Users u WHERE EmailAddress = 'fruzsina.papp@budapest.com' UNION
SELECT 'Cintia', 'Veres', '1995-03-24', 'Hungary', Null, 'Budapest', 'Erdőalja út 172.', u.Id FROM Users u WHERE EmailAddress = 'cintia.veres@budapest.com' UNION
SELECT 'Csilla', 'Bálint', '2000-05-22', 'Hungary', Null, 'Mezőkövesd', 'Kölcsey Ferenc utca 66.', u.Id FROM Users u WHERE EmailAddress = 'csilla.balint@mezokovesd.com' UNION
SELECT 'Nóra', 'Fekete', '1999-12-06', 'Hungary', Null, 'Pilisszentlászló', 'Tölgyfa utca 2.', u.Id FROM Users u WHERE EmailAddress = 'nora.fekete@pilisszentlaszlo.com' UNION
SELECT 'Erika', 'Vass', '1996-01-09', 'Hungary', 'Romania', 'Isaszeg', 'Móricz Zsigmond utca 2.', u.Id FROM Users u WHERE EmailAddress = 'erika.vass@isaszeg.com' UNION
SELECT 'Milán', 'Zobor', '1999-09-05', 'Hungary', Null, 'Budapest', 'BerdaJózsef utca 36. 4em/20', u.Id FROM Users u WHERE EmailAddress = 'milan.zobor@budapest.com' UNION
SELECT 'Krisztián', 'Lengyel', '1998-07-03', 'Hungary', Null, 'Budapest', 'Thököly út 12.', u.Id FROM Users u WHERE EmailAddress = 'krisztian.lengyel@budapest.com' UNION
SELECT 'Géza', 'Illés', '1997-10-30', 'Hungary', Null, 'Budapest', 'Szent Mihály utca 17.', u.Id FROM Users u WHERE EmailAddress = 'geza.illes@budapest.com' UNION
SELECT 'Kristóf', 'Török', '2002-05-28', 'Hungary', Null, 'Budapest', 'Fő út 40.', u.Id FROM Users u WHERE EmailAddress = 'kristof.torok@budapest.com' UNION
SELECT 'Dominik', 'Török', '1999-09-20', 'Hungary', Null, 'Budapest', 'Fő út 40.', u.Id FROM Users u WHERE EmailAddress = 'dominik.torok@budapest.com'

INSERT INTO [DBO].[Majors](Name)
VALUES ('Biology'), ('Chemistry'), ('Mathematics'), ('Physics'), ('Gymnastic'), ('Economics'), ('Art'), ('IT'), ('Literature'), ('Grammar'),
	   ('History'), ('English'), ('German'), ('French'), ('Algebra'), ('Programming'), ('Philosophy'), ('Painting'), ('Silviculture'), ('Ecology'),
	   ('Zoology'), ('Botany'), ('Logistic'), ('Graphic art'), ('Sculpture'), ('Discrete mathematics'), ('Database knowledge'), ('Latin'),
	   ('Social science'), ('Calculus'), ('Tourism'), ('Astronomy'), ('Geography'), ('Animation'), ('Designer'), ('Photography'), ('Technics'),
	   ('Robotics'), ('Journalism'), ('Agriculture'), ('Psychology')

INSERT INTO [DBO].[Teachers](PersonId)
SELECT p.Id FROM Persons p WHERE BirthDate='1974-12-17' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1984-06-03' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1974-10-24' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1965-06-12' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1959-03-20' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1990-04-11' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1983-02-15' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1987-01-30' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1979-11-08' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1990-03-15' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1980-02-20' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1992-07-21' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1988-11-03' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1986-02-24' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1986-02-24' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1984-03-16' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1990-07-20' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1986-02-24' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1986-11-10' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1986-08-21' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1973-11-01' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1983-12-01' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1991-10-06' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1978-09-30' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1971-03-31' UNION
SELECT p.Id FROM Persons p WHERE BirthDate='1968-01-24'

INSERT INTO [DBO].[MajorTeacher] (MajorId, TeacherId)
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Mathematics' AND  p.BirthDate = '1974-12-17' AND p.LastName= 'Csombor'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Literature' AND  p.BirthDate = '1984-06-03' AND p.LastName= 'Hajdú'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'History' AND  p.BirthDate = '1974-10-24' AND p.LastName= 'Puzsér'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Mathematics' AND  p.BirthDate = '1965-06-12' AND p.LastName= 'Kovács'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Economics' AND  p.BirthDate = '1959-03-20' AND p.LastName= 'Kádár'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Robotics' AND  p.BirthDate = '1990-04-11' AND p.LastName= 'Barna'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Zoology' AND  p.BirthDate = '1983-02-15' AND p.LastName= 'Nagy'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'English' AND  p.BirthDate = '1987-01-30' AND p.LastName= 'Kobzos'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Silviculture' AND  p.BirthDate = '1979-11-08' AND p.LastName= 'Szakály'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Mathematics' AND  p.BirthDate = '1990-03-15' AND p.LastName= 'Szél'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'History' AND  p.BirthDate = '1980-02-20' AND p.LastName= 'Favágó'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'IT' AND  p.BirthDate = '1992-07-21' AND p.LastName= 'Beke'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Mathematics' AND  p.BirthDate = '1988-11-03' AND p.LastName= 'Soós'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Literature' AND  p.BirthDate = '1986-02-24' AND p.LastName= 'Szakács'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Algebra' AND  p.BirthDate = '1986-02-24' AND p.LastName= 'Cermak'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Journalism' AND  p.BirthDate = '1984-03-16' AND p.LastName= 'Kovac'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Social Science' AND  p.BirthDate = '1990-07-20' AND p.LastName= 'Novák'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Tourism ' AND  p.BirthDate = '1986-02-24' AND p.LastName= 'Hlaváček'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Literature' AND  p.BirthDate = '1986-11-10' AND p.LastName= 'Wolf'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Social Science' AND  p.BirthDate = '1986-08-21' AND p.LastName= 'Ostrowski'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Economics' AND  p.BirthDate = '1973-11-01' AND p.LastName= 'Bieber'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Robotics' AND  p.BirthDate = '1983-12-01' AND p.LastName= 'Kaufmann'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Technics' AND  p.BirthDate = '1991-10-06' AND p.LastName= 'Muller'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Designer' AND  p.BirthDate = '1978-09-30' AND p.LastName= 'Hofmann'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Sculpture ' AND  p.BirthDate = '1971-03-31' AND p.LastName= 'Burgstaller'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Zoology' AND  p.BirthDate = '1968-01-24' AND p.LastName= 'Hahn'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'IT' AND  p.BirthDate = '1974-12-17' AND p.LastName= 'Csombor'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Grammar' AND  p.BirthDate = '1984-06-03' AND p.LastName= 'Hajdú'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Literature' AND  p.BirthDate = '1974-10-24' AND p.LastName= 'Puzsér'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Algebra' AND  p.BirthDate = '1965-06-12' AND p.LastName= 'Kovács'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Logistic' AND  p.BirthDate = '1959-03-20' AND p.LastName= 'Kádár'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Programming' AND  p.BirthDate = '1990-04-11' AND p.LastName= 'Barna'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Botany' AND  p.BirthDate = '1983-02-15' AND p.LastName= 'Nagy'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'German' AND  p.BirthDate = '1987-01-30' AND p.LastName= 'Kobzos'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Biology' AND  p.BirthDate = '1979-11-08' AND p.LastName= 'Szakály'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Economics' AND  p.BirthDate = '1990-03-15' AND p.LastName= 'Szél'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Literature' AND  p.BirthDate = '1980-02-20' AND p.LastName= 'Favágó'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Programming' AND  p.BirthDate = '1992-07-21' AND p.LastName= 'Beke'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Physics' AND  p.BirthDate = '1988-11-03' AND p.LastName= 'Soós'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Grammar' AND  p.BirthDate = '1986-02-24' AND p.LastName= 'Szakács'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Discrete Mathematics' AND  p.BirthDate = '1986-02-24' AND p.LastName= 'Cermak'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Grammar' AND  p.BirthDate = '1984-03-16' AND p.LastName= 'Kovac'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Economics' AND  p.BirthDate = '1990-07-20' AND p.LastName= 'Novák'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Logistic' AND  p.BirthDate = '1986-02-24' AND p.LastName= 'Hlaváček'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Grammar' AND  p.BirthDate = '1986-11-10' AND p.LastName= 'Wolf'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Psychology ' AND  p.BirthDate = '1986-08-21' AND p.LastName= 'Ostrowski'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Geography ' AND  p.BirthDate = '1973-11-01' AND p.LastName= 'Bieber'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'IT' AND  p.BirthDate = '1983-12-01' AND p.LastName= 'Kaufmann'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Calculus' AND  p.BirthDate = '1991-10-06' AND p.LastName= 'Muller'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Painting' AND  p.BirthDate = '1978-09-30' AND p.LastName= 'Hofmann'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Logistic ' AND  p.BirthDate = '1971-03-31' AND p.LastName= 'Burgstaller'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Botany' AND  p.BirthDate = '1968-01-24' AND p.LastName= 'Hahn'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Grammar' AND  p.BirthDate = '1980-02-20' AND p.LastName= 'Favágó'AND p.Id = t.PersonId UNION
SELECT m.Id, t.Id FROM Majors m, Persons p, Teachers t  WHERE m.Name = 'Designer' AND  p.BirthDate = '1984-03-16' AND p.LastName= 'Kovac'AND p.Id = t.PersonId;

WITH PersonStudents AS
(
	SELECT Id, FirstName, LastName, BirthDate, Nationality, City, Address
		FROM Persons p
		where Id not in (select PersonId from Teachers)
)
INSERT INTO [DBO].[Students](StartDate, ActiveStatus, PersonId)
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2008-10-16' AND FirstName = 'Anikó' AND LastName = 'Kelemen' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2010-06-14' AND FirstName = 'Anikó' AND LastName = 'Tóth' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2004-01-09' AND FirstName = 'Veronika' AND LastName = 'Szőke' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2009-05-02' AND FirstName = 'Szabina' AND LastName = 'Illés' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2004-04-03' AND FirstName = 'Viktória' AND LastName = 'Dobos' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2010-12-24' AND FirstName = 'Ivett' AND LastName = 'Kozma' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2004-10-14' AND FirstName = 'Orsolya' AND LastName = 'Pataki' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2013-12-27' AND FirstName = 'Dorina' AND LastName = 'Gáspár' UNION
SELECT '2013-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2007-08-17' AND FirstName = 'Éva' AND LastName = 'Halász' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2012-04-30' AND FirstName = 'Evelin' AND LastName = 'Orosz' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2008-03-12' AND FirstName = 'Adél' AND LastName = 'Biró' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2013-01-15' AND FirstName = 'Olivér' AND LastName = 'Orbán' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2011-12-20' AND FirstName = 'Géza' AND LastName = 'Bogdán' UNION
SELECT '2012-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2006-11-16' AND FirstName = 'Kevin' AND LastName = 'Király' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2012-12-21' AND FirstName = 'Tamás' AND LastName = 'Apród' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2011-04-15' AND FirstName = 'Dezső' AND LastName = 'Bakos' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2009-10-20' AND FirstName = 'József' AND LastName = 'Sándor' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2012-12-28' AND FirstName = 'Gergő' AND LastName = 'Tóth' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2010-05-27' AND FirstName = 'Gergely' AND LastName = 'Kerekes' UNION
SELECT '2013-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2007-11-18' AND FirstName = 'Marcell' AND LastName = 'Hajdú' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2009-08-08' AND FirstName = 'Lajos' AND LastName = 'Gáspár' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2006-07-11' AND FirstName = 'Donát' AND LastName = 'Király' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2008-08-08' AND FirstName = 'György' AND LastName = 'Vörös' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2013-02-21' AND FirstName = 'Ármin' AND LastName = 'Juhász' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2011-12-10' AND FirstName = 'Viktor' AND LastName = 'Juhász' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2010-10-13' AND FirstName = 'Balázs' AND LastName = 'Borbély' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2011-08-20' AND FirstName = 'Olivér' AND LastName = 'László' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2004-09-13' AND FirstName = 'Bendegúz' AND LastName = 'Bakos' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2005-11-09' AND FirstName = 'Renátó' AND LastName = 'Török' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2010-07-09' AND FirstName = 'Barnabás' AND LastName = 'Novák' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2011-03-06' AND FirstName = 'Milán' AND LastName = 'Kiss' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2013-12-21' AND FirstName = 'Laura' AND LastName = 'Borbély' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-02-17' AND FirstName = 'Hajnalka' AND LastName = 'Németh' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-02-18' AND FirstName = 'Mária' AND LastName = 'Székely' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-10-17' AND FirstName = 'Szabina' AND LastName = 'Vincze' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-09-02' AND FirstName = 'Lilla' AND LastName = 'Oláh' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-06-11' AND FirstName = 'Sára' AND LastName = 'Péter' UNION
SELECT '2013-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1995-09-11' AND FirstName = 'Anita' AND LastName = 'Fodor' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-11-18' AND FirstName = 'Benedek' AND LastName = 'Szalai' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-06-02' AND FirstName = 'László' AND LastName = 'Horváth' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-06-22' AND FirstName = 'Bertalan' AND LastName = 'Fehér' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-11-22' AND FirstName = 'Botond' AND LastName = 'Lukács' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-06-12' AND FirstName = 'Ferenc' AND LastName = 'Bogdán' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-04-29' AND FirstName = 'Csaba' AND LastName = 'Gáspár' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-06-02' AND FirstName = 'Csongor' AND LastName = 'Kelemen' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-08-13' AND FirstName = 'Patrik' AND LastName = 'Balla' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2002-09-10' AND FirstName = 'Dominik' AND LastName = 'Magyar' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-03-01' AND FirstName = 'Levente' AND LastName = 'Sípos' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-06-02' AND FirstName = 'Zsófia' AND LastName = 'Antal' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-01-11' AND FirstName = 'Ildikó' AND LastName = 'Gulyás' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-02-25' AND FirstName = 'Hajnalka' AND LastName = 'Virág' UNION
SELECT '2013-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1995-08-07' AND FirstName = 'Anita' AND LastName = 'Zobor' UNION
SELECT '2013-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1995-10-03' AND FirstName = 'Szabina' AND LastName = 'Biró' UNION
SELECT '2013-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1995-05-07' AND FirstName = 'Fruzsina' AND LastName = 'Papp' UNION
SELECT '2013-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1995-03-24' AND FirstName = 'Cintia' AND LastName = 'Veres' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-05-22' AND FirstName = 'Csilla' AND LastName = 'Bálint' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-12-06' AND FirstName = 'Nóra' AND LastName = 'Fekete' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-01-09' AND FirstName = 'Erika' AND LastName = 'Vass' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-09-05' AND FirstName = 'Milán' AND LastName = 'Zobor' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-07-03' AND FirstName = 'Krisztián' AND LastName = 'Lengyel' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-10-30' AND FirstName = 'Géza' AND LastName = 'Illés' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2002-05-28' AND FirstName = 'Kristóf' AND LastName = 'Török' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-09-20' AND FirstName = 'Dominik' AND LastName = 'Török'
