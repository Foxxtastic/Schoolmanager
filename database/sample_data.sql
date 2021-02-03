INSERT INTO [DBO].[Schools](EduId, Name, Country, City, Address)
VALUES ('031603','Neumann János Középiskola','Hungary','Eger','Rákóczi út 48.'),
	   ('15823443206','Kiss Ferenc Erdészeti Technikum','Hungary','Szeged','József Attila tér 6721.'),
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
	   ('dominik.torok@budapest.com', HASHBYTES('SHA2_512', 'bi77ffhoyp'), 1, NULL),
	   ('akos.lukacs@szeged.com', HASHBYTES('SHA2_512', 'tp94usylaj'), 1, NULL),
	   ('jozsef.varga@roszke.com', HASHBYTES('SHA2_512', 'ya36dtrune'), 1, NULL),
	   ('csaba.novak@algyo.com', HASHBYTES('SHA2_512', 'hn69elvycl'), 1, NULL),
	   ('bence.faragó@szeged.com', HASHBYTES('SHA2_512', 'my71rfuqao'),	1,	NULL),
	   ('marko.budai@szeged.com', HASHBYTES('SHA2_512', 'dy59uhvybk'),	1,	NULL),
	   ('mario.vass@szeged.com', HASHBYTES('SHA2_512', 'sq36xjrmbk'),	1,	NULL),
	   ('vilmos.kovacs@szeged.com', HASHBYTES('SHA2_512', 'qu52gdpbub'),	1,	NULL),
	   ('endre.orosz@szeged.com', HASHBYTES('SHA2_512', 'tz38zdyhan'),	1,	NULL),
	   ('donat.feher@szeged.com', HASHBYTES('SHA2_512', 'zy50lbaxdc'),	1,	NULL),
	   ('domonkos.major@szeged.com', HASHBYTES('SHA2_512', 'vo47errqdn'),	1,	NULL),
	   ('csenge.egyed@szeged.com', HASHBYTES('SHA2_512', 'pj9nqvmqu'),	1,	NULL),
	   ('karoly.fulop@szeged.com', HASHBYTES('SHA2_512', 'gf65dmfsuj'),	1,	NULL),
	   ('henrietta.torok@szeged.com', HASHBYTES('SHA2_512', 'xc11stmxpg'),	1,	NULL),
	   ('sandor.marton@szeged.com', HASHBYTES('SHA2_512', 'zv4tsbvbk'),	1,	NULL),
	   ('akos.kis@szeged.com', HASHBYTES('SHA2_512', 'jz54lyhora'),	1,	NULL),
	   ('vanessza.kelemen@szeged.com', HASHBYTES('SHA2_512', 'vn71pupqpi'),	1,	NULL),
	   ('blanka.orsos@szeged.com', HASHBYTES('SHA2_512', 'ez76mmhigo'),	1,	NULL),
	   ('gergely.szekeres@szeged.com', HASHBYTES('SHA2_512', 'vs40ghtjbm'),	1,	NULL),
	   ('marton.jakab@szeged.com', HASHBYTES('SHA2_512', 'pt23lwhhao'),	1,	NULL),
	   ('barnabás.gal@szeged.com', HASHBYTES('SHA2_512', 'mz86afaptt'),	1,	NULL),
	   ('andrás.gulyas@szeged.com', HASHBYTES('SHA2_512', 'hk27gcxwjc'),	1,	NULL),
	   ('antal.meszaros@domaszek.com', HASHBYTES('SHA2_512', 'zf67hrdryb'),	1,	NULL),
	   ('krisztofer.vaszoly@szeged.com', HASHBYTES('SHA2_512', 'le95wiaxzl'),	1,	NULL),
	   ('alexander.orban@szeged.com', HASHBYTES('SHA2_512', 'uj62hiyhxj'),	1,	NULL),
	   ('nandor.major@szatymaz.com', HASHBYTES('SHA2_512', 'ww26jfeedg'),	1,	NULL),
	   ('dominik.vincze@maroslele.com', HASHBYTES('SHA2_512', 'py58dilksz'),	1,	NULL),
	   ('patrik.kis@kiszombor.com', HASHBYTES('SHA2_512', 'xe99zyfutq'),	1,	NULL),
	   ('dezso.barna@maroslele.com', HASHBYTES('SHA2_512', 'sy66pxzjan'),	1,	NULL),
	   ('karoly.halasz@csanadpalota.com', HASHBYTES('SHA2_512', 'jr11ayembt'),	1,	NULL),
	   ('renato.lengyel@szeged.com', HASHBYTES('SHA2_512', 'su41igfxfn'),	1,	NULL),
	   ('kinga.veres@algyo.com', HASHBYTES('SHA2_512', 'if96pexsup'),	1,	NULL),
	   ('armand.bodnar@szeged.com', HASHBYTES('SHA2_512', 'ba87klgtfm'),	1,	NULL),
	   ('renato.lakatos@kiszombor.com', HASHBYTES('SHA2_512', 'mb37mkqwpc'),	1,	NULL),
	   ('dorina.barna@szeged.com', HASHBYTES('SHA2_512', 'tm44ckuqnd'),	1,	NULL),
	   ('endre.kende@szeged.com', HASHBYTES('SHA2_512', 'bq45lmrada'),	1,	NULL),
	   ('noel.simon@szeged.com', HASHBYTES('SHA2_512', 'qj31jzyvng'),	1,	NULL),
	   ('tibor.dobos@szeged.com', HASHBYTES('SHA2_512', 'ay28njxakd'),	1,	NULL),
	   ('janos.bakos@szeged.com', HASHBYTES('SHA2_512', 'hl62jzqgnn'),	1,	NULL),
	   ('vivien.novak@szeged.com', HASHBYTES('SHA2_512', 'ay87wkwpjm'),	1,	NULL),
	   ('monika.nemeth@szeged.com', HASHBYTES('SHA2_512', 'bz68cahksq'), 1,	NULL),
	   ('gerhardt.tolkien@dresden.com',	HASHBYTES('SHA2_512', 'dp85qoeqwu'), 1, NULL),
	   ('linda.brodbeck@leipzig.com', HASHBYTES('SHA2_512', 'ge10bwvbxv'), 1, NULL),
	   ('ulrike.schuchard@dresden.com', HASHBYTES('SHA2_512', 'xk52mxphnm'), 1, NULL),
	   ('micha.bader@leipzig.com', HASHBYTES('SHA2_512', 'ea17efpjrz'), 1, NULL),
	   ('augusta.vonnegut@dresden.com', HASHBYTES('SHA2_512', 'qj18anpgua'), 1, NULL),
	   ('olivia.gross@leipzig.com', HASHBYTES('SHA2_512', 'bi28lielkw'), 1, NULL),
	   ('philipp.wolf@dresden.com', HASHBYTES('SHA2_512', 'ib57awvxid'), 1, NULL),
	   ('irmgard.geier@leipzig.com', HASHBYTES('SHA2_512', 'dd49frndmz'), 1, NULL),
	   ('florian.nussbaum@dresden.com', HASHBYTES('SHA2_512', 'nf38gbpfki'), 1, NULL),
	   ('linus.ackermann@leipzig.com', HASHBYTES('SHA2_512', 'go86ujyjwf'), 1, NULL),
	   ('olivia.gross@dresden.com', HASHBYTES('SHA2_512', 'wq88dvuxso'), 1, NULL),
	   ('philipp.wolf@leipzig.com', HASHBYTES('SHA2_512', 'nl94zsghjj'), 1, NULL),
	   ('irmgard.geier@dresden.com', HASHBYTES('SHA2_512', 'qg64zxipgd'), 1, NULL),
	   ('florian.nussbaum@leipzig.com', HASHBYTES('SHA2_512', 'ow76kjuzyg'), 1, NULL),
	   ('linus.ackermann@dresden.com', HASHBYTES('SHA2_512', 'kw82zoulgk'), 1, NULL),
	   ('tillo.huber@leipzig.com', HASHBYTES('SHA2_512', 'vm39iawnkc'), 1, NULL),
	   ('sigi.baumer@dresden.com', HASHBYTES('SHA2_512', 'gm3kpfnzq'), 1, NULL),
	   ('eugen.bauers@leipzig.com', HASHBYTES('SHA2_512', 'zp44tyxuqk'), 1, NULL),
	   ('swanhilda.denzel@dresden.com', HASHBYTES('SHA2_512', 'jx28piajze'), 1, NULL),
	   ('jo.markwardt@leipzig.com', HASHBYTES('SHA2_512', 'ty5eyeebf'), 1, NULL),
	   ('gitta.stein@dresden.com', HASHBYTES('SHA2_512', 'zi22nhjlth'), 1, NULL),
	   ('traugott.hennig@leipzig.com', HASHBYTES('SHA2_512', 'oe46aniawh'), 1, NULL),
	   ('lieselotte.gehring@dresden.com', HASHBYTES('SHA2_512', 'ge52nrbsif'), 1, NULL),
	   ('eckhart.muhlfeld@leipzig.com', HASHBYTES('SHA2_512', 'gg8icitmg'), 1, NULL),
	   ('sascha.siemon@dresden.com', HASHBYTES('SHA2_512', 'gp87acwhuu'), 1, NULL),
	   ('sonja.huffmann@leipzig.com', HASHBYTES('SHA2_512', 'wu1xttlnu'), 1, NULL),
	   ('marianne.lorentz@dresden.com', HASHBYTES('SHA2_512', 'sz69qjvuhl'), 1, NULL),
	   ('ernst.sitz@leipzig.com', HASHBYTES('SHA2_512', 'qg82ldrsds'), 1, NULL),
	   ('waltraud.geiszler@dresden.com', HASHBYTES('SHA2_512', 'rz19uylzuq'), 1, NULL),
	   ('gloria.schindler@leipzig.com', HASHBYTES('SHA2_512', 'ch9tydafn'), 1, NULL),
	   ('wolf.bachmann@dresden.com', HASHBYTES('SHA2_512', 'gw43qwstze'), 1, NULL),
	   ('petrus.simons@leipzig.com', HASHBYTES('SHA2_512', 'wk38vgtdbn'), 1, NULL),
	   ('anton.kraemer@dresden.com', HASHBYTES('SHA2_512', 'av75gqczru'), 1, NULL),
	   ('karl-heinz.dieter@leipzig.com', HASHBYTES('SHA2_512', 'py39tpicgc'), 1, NULL),
	   ('dominik.suess@dresden.com', HASHBYTES('SHA2_512', 'tl56hmbpja'), 1, NULL),
	   ('heidrun.gerstle@leipzig.com', HASHBYTES('SHA2_512', 'hy39trgkud'), 1, NULL),
	   ('stefanie.stück@dresden.com', HASHBYTES('SHA2_512', 'yn13zlerhy'), 1, NULL),
	   ('judit.jung@leipzig.com', HASHBYTES('SHA2_512', 'cs16aossmn'), 1, NULL),
	   ('iris.gerber@dresden.com', HASHBYTES('SHA2_512', 'uv4mzruil'), 1, NULL),
	   ('lian.siegel@leipzig.com', HASHBYTES('SHA2_512', 'oc62cosgrh'), 1, NULL),
	   ('luzia.behringer@dresden.com', HASHBYTES('SHA2_512', 'ic69svxvxe'), 1, NULL),
	   ('miriam.braun@leipzig.com', HASHBYTES('SHA2_512', 'ht82dthydo'), 1, NULL),
	   ('gerold.schenk@dresden.com', HASHBYTES('SHA2_512', 'ys2cbqkwm'), 1, NULL),
	   ('gereon.ferber@leipzig.com', HASHBYTES('SHA2_512', 'mx12jsresa'), 1, NULL),
	   ('laura.pahlke@dresden.com', HASHBYTES('SHA2_512', 'ny96rursgn'), 1, NULL),
	   ('brigitte.lowe@leipzig.com', HASHBYTES('SHA2_512', 'kt39tdhiyx'), 1, NULL),
	   ('oliver.wirt@dresden.com', HASHBYTES('SHA2_512', 'dh22jrveid'), 1, NULL),
	   ('else.yount@leipzig.com', HASHBYTES('SHA2_512', 'mm40admtlo'), 1, NULL),
	   ('wendel.wirt@dresden.com', HASHBYTES('SHA2_512', 'ob4szgcsa'), 1, NULL),
	   ('edmund.suess@leipzig.com', HASHBYTES('SHA2_512', 'sr71zntawz'), 1, NULL),
	   ('urs.baumbach@dresden.com', HASHBYTES('SHA2_512', 'lx0ebreei'), 1, NULL),
	   ('maximilian.adam@leipzig.com', HASHBYTES('SHA2_512', 'uk2xiowea'), 1, NULL),
	   ('karlmann.krause@dresden.com', HASHBYTES('SHA2_512', 'jo36jnhdeb'), 1, NULL),
	   ('sabine.denzel@leipzig.com', HASHBYTES('SHA2_512', 'bj79kklnex'), 1, NULL),
	   ('werther.schwangau@dresden.com', HASHBYTES('SHA2_512', 'yv91jaqofi'), 1, NULL),
	   ('helma.pahlke@leipzig.com', HASHBYTES('SHA2_512', 'cw35qaecbw'), 1, NULL),
	   ('constanze.buchholz@dresden.com', HASHBYTES('SHA2_512', 'qi41xmirdo'), 1, NULL),
	   ('krista.andres@leipzig.com', HASHBYTES('SHA2_512', 'zg88cvdfbm'), 1, NULL),
	   ('eleonore.schuhart@dresden.com', HASHBYTES('SHA2_512', 'uu19kbhsqw'), 1, NULL),
	   ('hans-gunter.schlosser@leipzig.com', HASHBYTES('SHA2_512', 'iv84wnmhiy'), 1, NULL),
	   ('baldur.essen@dresden.com', HASHBYTES('SHA2_512', 'pn64gigvdm'), 1, NULL),
	   ('kerstin.kistler@leipzig.com', HASHBYTES('SHA2_512', 'sf84usklim'), 1, NULL),
	   ('marianne.frei@dresden.com', HASHBYTES('SHA2_512', 'tx76cjrepo'), 1, NULL),
	   ('wiltrud.dieter@leipzig.com', HASHBYTES('SHA2_512', 'ci85eytzhi'), 1, NULL),
	   ('arend.brotz@dresden.com', HASHBYTES('SHA2_512', 'gi31pqdhnn'), 1, NULL),
	   ('wolfram.gorman@leipzig.com', HASHBYTES('SHA2_512', 'up34mxgxze'), 1, NULL),
	   ('kolman.jans@dresden.com', HASHBYTES('SHA2_512', 'mk97owszhk'), 1, NULL),
	   ('nathalie.blumenthal@leipzig.com', HASHBYTES('SHA2_512', 'uq61neywva'), 1, NULL),
	   ('gisbert.roth@dresden.com', HASHBYTES('SHA2_512', 'hn54zsajdc'), 1, NULL),
	   ('eleonore.jager@leipzig.com', HASHBYTES('SHA2_512', 'ex30vqekss'), 1, NULL),
	   ('siegward.kroger@ebersbach-neugersdorf.com', HASHBYTES('SHA2_512', 'ao23kwxjfl'), 1, NULL),
	   ('irmgard.unkle@pirna.com', HASHBYTES('SHA2_512', 'nv70zwrylt'), 1, NULL),
	   ('carina.kohler@lauter-bernsbach.com', HASHBYTES('SHA2_512', 'bu48qojjdi'), 1, NULL),
	   ('ina.bader@lautabhoyerswerda.com', HASHBYTES('SHA2_512', 'ou75vfzbko'), 1, NULL),
	   ('jessica.achilles@zwonitz.com', HASHBYTES('SHA2_512', 'tc26xeyxhx'), 1, NULL),
	   ('sascha.armbruster@freibergsachs.com', HASHBYTES('SHA2_512', 'fc97pbhbwz'), 1, NULL),
	   ('korbinian.hiedler@marienbergerzgeb.com', HASHBYTES('SHA2_512', 'zr63gditgx'), 1, NULL),
	   ('henriette.wehnert@oelsnitzerzgeb.com', HASHBYTES('SHA2_512', 'ol45tmtljl'), 1, NULL),
	   ('gerhold.messner@chemnitzsachs.com', HASHBYTES('SHA2_512', 'hp14cpozbo'), 1, NULL),
	   ('baldur.hertz@rietschen.com', HASHBYTES('SHA2_512', 'tp83npwplv'), 1, NULL),
	   ('burchard.wahner@vierkirchen.com', HASHBYTES('SHA2_512', 'ql99cxxbci'), 1, NULL),
	   ('theda.morgenstern@kamenz.com', HASHBYTES('SHA2_512', 'ik61vstibb'), 1, NULL),
	   ('kunigunde.schmitz@torgau.com', HASHBYTES('SHA2_512', 'xl94bkuutp'), 1, NULL),
	   ('hermine.metz@csoswigbdresden.com', HASHBYTES('SHA2_512', 'hu1ocatqz'), 1, NULL),
	   ('sophie.wechsler@sehmatal-cranzahl.com', HASHBYTES('SHA2_512', 'sk76sacviv'), 1, NULL),
	   ('bastian.hennig@herrnhut.com', HASHBYTES('SHA2_512', 'en7nqcibi'), 1, NULL),
	   ('anna.junge@bornableipzig.com', HASHBYTES('SHA2_512', 'lz29oiduax'), 1, NULL),
	   ('eduard.aue@auerbachvogtl.com', HASHBYTES('SHA2_512', 'im87rkzmbq'), 1, NULL),
	   ('babette.knef@schonbachblobau.com', HASHBYTES('SHA2_512', 'rx11pvnntg'), 1, NULL),
	   ('hermenegild.rothenberg@gorlitzneiße.com', HASHBYTES('SHA2_512', 'gq75rehayi'), 1, NULL),
	   ('mathis.esser@treuenvogtl.com', HASHBYTES('SHA2_512', 'rg56vonyjp'), 1, NULL),
	   ('gisa.aue@chemnitzsachs.com', HASHBYTES('SHA2_512', 'ut68zaslxb'), 1, NULL),
	   ('magda.lehmann@hermsdorferzgeb.com', HASHBYTES('SHA2_512', 'mu2okszaf'), 1, NULL),
	   ('isaak.voll@oschatz.com', HASHBYTES('SHA2_512', 'vg30jvkrxj'), 1, NULL),
	   ('brunhilde.hubert@olbernhau.com', HASHBYTES('SHA2_512', 'pp9ahizbl'), 1, NULL),
	   ('liane.oberst@grimma.com', HASHBYTES('SHA2_512', 'rx8cdavha'), 1, NULL),
	   ('olaf.leitner@altenbergerzgeb.com', HASHBYTES('SHA2_512', 'ev74ltlrjn'), 1, NULL),
	   ('nora.blau@riesa.com', HASHBYTES('SHA2_512', 'ya64lsejnz'), 1, NULL),
	   ('leni.geiszler@oelsnitzerzgeb.com', HASHBYTES('SHA2_512', 'gm36gkuokd'), 1, NULL),
	   ('torsten.fleischer@plauenvogtl.com', HASHBYTES('SHA2_512', 'wn15krcxgs'), 1, NULL)


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
SELECT 'Dominik', 'Török', '1999-09-20', 'Hungary', Null, 'Budapest', 'Fő út 40.', u.Id FROM Users u WHERE EmailAddress = 'dominik.torok@budapest.com' UNION
SELECT 'Ákos', 'Lukács', '2003-08-17', 'Hungary', Null, 'Szeged', 'Fő fasor, 56.', u.Id FROM Users u WHERE EmailAddress = 'akos.lukacs@szeged.com' UNION
SELECT 'József', 'Varga', '2005-09-04', 'Hungary', Null, 'Röszke', 'Felszabadulás utca 90.', u.Id FROM Users u WHERE EmailAddress = 'jozsef.varga@roszke.com' UNION
SELECT 'Csaba', 'Novák', '2003-02-09', 'Hungary', Null, 'Algyő', 'Búvár utca 9.', u.Id FROM Users u WHERE EmailAddress = 'csaba.novak@algyo.com' UNION
SELECT 'Bence', 'Faragó', '2002-01-16', 'Hungary', Null, 'Szeged', 'Jakab Lajos utca 6. 1 em/4.', u.Id FROM Users u WHERE EmailAddress = 'bence.faragó@szeged.com' UNION
SELECT 'Márkó', 'Budai', '2004-06-03', 'Hungary', Null, 'Szeged', 'Jakab Lajos utca 2.', u.Id FROM Users u WHERE EmailAddress = 'marko.budai@szeged.com' UNION
SELECT 'Márió', 'Vass', '2005-11-24', 'Hungary', Null, 'Szeged', 'Hargitai utca 51. 2em/8.', u.Id FROM Users u WHERE EmailAddress = 'mario.vass@szeged.com' UNION
SELECT 'Vilmos', 'Kovács', '2002-09-20', 'Hungary', Null, 'Szeged', 'József Attila körút 136. 4em/24.', u.Id FROM Users u WHERE EmailAddress = 'vilmos.kovacs@szeged.com' UNION
SELECT 'Endre', 'Orosz', '2004-02-02', 'Hungary', Null, 'Szeged', 'Kisfaludy utca 17.', u.Id FROM Users u WHERE EmailAddress = 'endre.orosz@szeged.com' UNION
SELECT 'Donát', 'Fehér', '2005-09-19', 'Hungary', Null, 'Szeged', 'Lengyel utca 5. 2em/8.', u.Id FROM Users u WHERE EmailAddress = 'donat.feher@szeged.com' UNION
SELECT 'Domonkos', 'Major', '2005-10-18', 'Hungary', Null, 'Szeged', 'Szent Mihály utca 7.', u.Id FROM Users u WHERE EmailAddress = 'domonkos.major@szeged.com' UNION
SELECT 'Csenge', 'Egyed', '2003-08-27', 'Hungary', Null, 'Szeged', 'Felső Tisza-part 27. 3em/12.', u.Id FROM Users u WHERE EmailAddress = 'csenge.egyed@szeged.com' UNION
SELECT 'Károly', 'Fülöp', '2002-03-19', 'Hungary', Null, 'Szeged', 'Felső Tisza-part 27. 2em/6.', u.Id FROM Users u WHERE EmailAddress = 'karoly.fulop@szeged.com' UNION
SELECT 'Henrietta', 'Török', '2006-05-29', 'Hungary', Null, 'Szeged', 'Tápai utca 50. 4em/16.', u.Id FROM Users u WHERE EmailAddress = 'henrietta.torok@szeged.com' UNION
SELECT 'Sándor', 'Márton', '2002-10-08', 'Hungary', Null, 'Szeged', 'Bite Pál utca 3. 1em/5.', u.Id FROM Users u WHERE EmailAddress = 'sandor.marton@szeged.com' UNION
SELECT 'Ákos', 'Kis', '2006-01-11', 'Hungary', Null, 'Szeged', 'Május 1 utca 16.', u.Id FROM Users u WHERE EmailAddress = 'akos.kis@szeged.com' UNION
SELECT 'Vanessza', 'Kelemen', '2005-01-08', 'Hungary', Null, 'Szeged', 'Sólyom utca 9/A. 3Em/13.', u.Id FROM Users u WHERE EmailAddress = 'vanessza.kelemen@szeged.com' UNION
SELECT 'Blanka', 'Orsós', '2006-07-08', 'Hungary', Null, 'Szeged', 'Sólyom utca 9/A. 3Em/12.', u.Id FROM Users u WHERE EmailAddress = 'blanka.orsos@szeged.com' UNION
SELECT 'Gergely', 'Szekeres', '2004-07-22', 'Hungary', 'Serbia', 'Szeged', 'Csörlő utca 6. 2em/7.', u.Id FROM Users u WHERE EmailAddress = 'gergely.szekeres@szeged.com' UNION
SELECT 'Márton', 'Jakab', '2004-03-20', 'Hungary', Null, 'Szeged', 'Kapitány utca 6.', u.Id FROM Users u WHERE EmailAddress = 'marton.jakab@szeged.com' UNION
SELECT 'Barnabás', 'Gál', '2006-03-26', 'Hungary', Null, 'Szeged', 'Ibolya utca 6.', u.Id FROM Users u WHERE EmailAddress = 'barnabás.gal@szeged.com' UNION
SELECT 'András', 'Gulyás', '2003-06-10', 'Hungary', Null, 'Szeged', 'Jerney utca 32.', u.Id FROM Users u WHERE EmailAddress = 'andrás.gulyas@szeged.com' UNION
SELECT 'Antal', 'Mészáros', '2005-03-28', 'Hungary', Null, 'Domaszék', 'József Attila utca 32.', u.Id FROM Users u WHERE EmailAddress = 'antal.meszaros@domaszek.com' UNION
SELECT 'Krisztofer', 'Vászoly', '2003-08-29', 'Hungary', Null, 'Szeged', 'Blaha Lujza utca 18.', u.Id FROM Users u WHERE EmailAddress = 'krisztofer.vaszoly@szeged.com' UNION
SELECT 'Alexander', 'Orbán', '2003-10-13', 'Hungary', Null, 'Szeged', 'Blaha Lujza utca 20.', u.Id FROM Users u WHERE EmailAddress = 'alexander.orban@szeged.com' UNION
SELECT 'Nándor', 'Major', '2004-04-09', 'Hungary', Null, 'Szatymaz', 'Béke utca 64.', u.Id FROM Users u WHERE EmailAddress = 'nandor.major@szatymaz.com' UNION
SELECT 'Dominik', 'Vincze', '2006-06-02', 'Hungary', Null, 'Maroslele', 'Vásárhelyi utca 31.', u.Id FROM Users u WHERE EmailAddress = 'dominik.vincze@maroslele.com' UNION
SELECT 'Patrik', 'Kis', '2006-06-18', 'Hungary', Null, 'Kiszombor', 'Szőlő utca 4.', u.Id FROM Users u WHERE EmailAddress = 'patrik.kis@kiszombor.com' UNION
SELECT 'Dezső', 'Barna', '2005-11-08', 'Hungary', Null, 'Maroslele', 'Dózsa György utca 31.', u.Id FROM Users u WHERE EmailAddress = 'dezso.barna@maroslele.com' UNION
SELECT 'Károly', 'Halász', '2003-12-13', 'Hungary', Null, 'Csanádpalota', 'Tompa Mihály utca 12.', u.Id FROM Users u WHERE EmailAddress = 'karoly.halasz@csanadpalota.com' UNION
SELECT 'Renátó', 'Lengyel', '2002-04-06', 'Hungary', Null, 'Szeged', 'Csap utca 42.', u.Id FROM Users u WHERE EmailAddress = 'renato.lengyel@szeged.com' UNION
SELECT 'Kinga', 'Veres', '2003-01-06', 'Hungary', Null, 'Algyő', 'Búvár utca 8.', u.Id FROM Users u WHERE EmailAddress = 'kinga.veres@algyo.com' UNION
SELECT 'Armand', 'Bodnár', '2003-11-17', 'Hungary', Null, 'Szeged', 'Réti út 38.', u.Id FROM Users u WHERE EmailAddress = 'armand.bodnar@szeged.com' UNION
SELECT 'Renátó', 'Lakatos', '2005-06-30', 'Hungary', Null, 'Kiszombor', 'Kör utca 132.', u.Id FROM Users u WHERE EmailAddress = 'renato.lakatos@kiszombor.com' UNION
SELECT 'Dorina', 'Barna', '2004-08-29', 'Hungary', Null, 'Szeged', 'Csap utca 48.', u.Id FROM Users u WHERE EmailAddress = 'dorina.barna@szeged.com' UNION
SELECT 'Endre', 'Kende', '2003-10-13', 'Hungary', Null, 'Szeged', 'Árvíz utca 2. fsz/2.', u.Id FROM Users u WHERE EmailAddress = 'endre.kende@szeged.com' UNION
SELECT 'Noel', 'Simon', '2002-12-31', 'Hungary', Null, 'Szeged', 'Vezér utca 14.', u.Id FROM Users u WHERE EmailAddress = 'noel.simon@szeged.com' UNION
SELECT 'Tibor', 'Dobos', '2002-01-14', 'Hungary', Null, 'Szeged', 'Ilosvai utca 2.', u.Id FROM Users u WHERE EmailAddress = 'tibor.dobos@szeged.com' UNION
SELECT 'János', 'Bakos', '2006-01-06', 'Hungary', Null, 'Szeged', 'Kossuth Lajos utca 5.', u.Id FROM Users u WHERE EmailAddress = 'janos.bakos@szeged.com' UNION
SELECT 'Vivien', 'Novák', '2006-01-01', 'Hungary', 'Serbia', 'Szeged', 'Mozdony utca 45.', u.Id FROM Users u WHERE EmailAddress = 'vivien.novak@szeged.com' UNION
SELECT 'Mónika', 'Németh', '2005-01-19', 'Hungary', Null, 'Szeged', 'Mozdony utca 49.', u.Id FROM Users u WHERE EmailAddress = 'monika.nemeth@szeged.com' UNION
SELECT 'Gerhardt', 'Tolkien', '1999-06-20', 'Germany', 'Austria', 'Dresden', ' Am Feldrain 45', u.Id FROM Users u WHERE EmailAddress = 'gerhardt.tolkien@dresden.com' UNION
SELECT 'Linda', 'Brodbeck', '2000-09-06', 'Germany', Null, 'Leipzig', ' Maulbeerweg 5', u.Id FROM Users u WHERE EmailAddress = 'linda.brodbeck@leipzig.com' UNION
SELECT 'Ulrike', 'Schuchard', '2001-11-08', 'Germany', Null, 'Dresden', ' Bernhardstraße 23', u.Id FROM Users u WHERE EmailAddress = 'ulrike.schuchard@dresden.com' UNION
SELECT 'Micha', 'Bader', '1998-09-07', 'Germany', Null, 'Leipzig', ' Dahlienstraße 55', u.Id FROM Users u WHERE EmailAddress = 'micha.bader@leipzig.com' UNION
SELECT 'Augusta', 'Vonnegut', '2000-04-01', 'Germany', Null, 'Dresden', ' Weststraße 27', u.Id FROM Users u WHERE EmailAddress = 'augusta.vonnegut@dresden.com' UNION
SELECT 'Olivia', 'Gross', '2000-04-11', 'Germany', Null, 'Leipzig', ' Torgauer Straße 94', u.Id FROM Users u WHERE EmailAddress = 'olivia.gross@leipzig.com' UNION
SELECT 'Philipp', 'Wolf', '1998-09-29', 'Germany', Null, 'Dresden', ' Plauenscher Ring 31', u.Id FROM Users u WHERE EmailAddress = 'philipp.wolf@dresden.com' UNION
SELECT 'Irmgard', 'Geier', '2000-06-20', 'Germany', Null, 'Leipzig', ' Otto-Michael-Straße 44', u.Id FROM Users u WHERE EmailAddress = 'irmgard.geier@leipzig.com' UNION
SELECT 'Florian', 'Nussbaum', '2001-02-15', 'Germany', Null, 'Dresden', ' Kastanienstraße 6', u.Id FROM Users u WHERE EmailAddress = 'florian.nussbaum@dresden.com' UNION
SELECT 'Linus', 'Ackermann', '1999-02-15', 'Germany', Null, 'Leipzig', ' Schkorlopper Straße 36', u.Id FROM Users u WHERE EmailAddress = 'linus.ackermann@leipzig.com' UNION
SELECT 'Olivia', 'Gross', '1998-01-20', 'Germany', Null, 'Dresden', ' Alte Meißner Landstraße 25', u.Id FROM Users u WHERE EmailAddress = 'olivia.gross@dresden.com' UNION
SELECT 'Philipp', 'Wolf', '1999-01-28', 'Germany', Null, 'Leipzig', ' Stockstraße 4', u.Id FROM Users u WHERE EmailAddress = 'philipp.wolf@leipzig.com' UNION
SELECT 'Irmgard', 'Geier', '1998-10-11', 'Germany', Null, 'Dresden', ' Am Elbblick 18', u.Id FROM Users u WHERE EmailAddress = 'irmgard.geier@dresden.com' UNION
SELECT 'Florian', 'Nussbaum', '1997-02-18', 'Germany', Null, 'Leipzig', ' Am Fischerhaus 5', u.Id FROM Users u WHERE EmailAddress = 'florian.nussbaum@leipzig.com' UNION
SELECT 'Linus', 'Ackermann', '1998-10-25', 'Germany', 'Austria', 'Dresden', ' Schaufußstraße 11', u.Id FROM Users u WHERE EmailAddress = 'linus.ackermann@dresden.com' UNION
SELECT 'Tillo', 'Hüber', '1998-09-17', 'Germany', Null, 'Leipzig', ' Borkumer Weg 4', u.Id FROM Users u WHERE EmailAddress = 'tillo.huber@leipzig.com' UNION
SELECT 'Sigi', 'Baumer', '1999-07-22', 'Germany', Null, 'Dresden', ' Am Hellerhof 7', u.Id FROM Users u WHERE EmailAddress = 'sigi.baumer@dresden.com' UNION
SELECT 'Eugen', 'Bauers', '1997-07-05', 'Germany', Null, 'Leipzig', ' Höltystraße 13', u.Id FROM Users u WHERE EmailAddress = 'eugen.bauers@leipzig.com' UNION
SELECT 'Swanhilda', 'Denzel', '2001-10-23', 'Germany', Null, 'Dresden', ' Carusufer 10', u.Id FROM Users u WHERE EmailAddress = 'swanhilda.denzel@dresden.com' UNION
SELECT 'Jo', 'Markwardt', '1999-06-14', 'Germany', Null, 'Leipzig', ' Zu den Bruchwiesen 12', u.Id FROM Users u WHERE EmailAddress = 'jo.markwardt@leipzig.com' UNION
SELECT 'Gitta', 'Stein', '2000-06-12', 'Germany', Null, 'Dresden', ' Leutewitzer Ring 26', u.Id FROM Users u WHERE EmailAddress = 'gitta.stein@dresden.com' UNION
SELECT 'Traugott', 'Hennig', '1996-12-30', 'Germany', Null, 'Leipzig', ' Wangerooger Weg 6', u.Id FROM Users u WHERE EmailAddress = 'traugott.hennig@leipzig.com' UNION
SELECT 'Lieselotte', 'Gehring', '1998-06-24', 'Germany', Null, 'Dresden', ' Semmelweisstraße 5', u.Id FROM Users u WHERE EmailAddress = 'lieselotte.gehring@dresden.com' UNION
SELECT 'Eckhart', 'Muhlfeld', '1999-05-24', 'Germany', Null, 'Leipzig', ' GutsMuthsstraße 12', u.Id FROM Users u WHERE EmailAddress = 'eckhart.muhlfeld@leipzig.com' UNION
SELECT 'Sascha', 'Siemon', '2000-02-24', 'Germany', Null, 'Dresden', ' Friedrich-Hegel-Straße 29', u.Id FROM Users u WHERE EmailAddress = 'sascha.siemon@dresden.com' UNION
SELECT 'Sonja', 'Huffmann', '1999-08-11', 'Germany', Null, 'Leipzig', ' Stauffenbergstraße 18', u.Id FROM Users u WHERE EmailAddress = 'sonja.huffmann@leipzig.com' UNION
SELECT 'Marianne', 'Lorentz', '1996-10-31', 'Germany', Null, 'Dresden', ' Lewickistraße 54', u.Id FROM Users u WHERE EmailAddress = 'marianne.lorentz@dresden.com' UNION
SELECT 'Ernst', 'Sitz', '1996-11-30', 'Germany', Null, 'Leipzig', ' Steinpilzweg 23', u.Id FROM Users u WHERE EmailAddress = 'ernst.sitz@leipzig.com' UNION
SELECT 'Waltraud', 'Geiszler', '1997-02-16', 'Germany', Null, 'Dresden', ' Birkigter Straße 1', u.Id FROM Users u WHERE EmailAddress = 'waltraud.geiszler@dresden.com' UNION
SELECT 'Gloria', 'Schindler', '1997-01-22', 'Germany', Null, 'Leipzig', ' Friedrich-Ebert-Straße 27', u.Id FROM Users u WHERE EmailAddress = 'gloria.schindler@leipzig.com' UNION
SELECT 'Wolf', 'Bachmann', '2000-07-05', 'Germany', Null, 'Dresden', ' Bischofsweg 44', u.Id FROM Users u WHERE EmailAddress = 'wolf.bachmann@dresden.com' UNION
SELECT 'Petrus', 'Simons', '2000-01-20', 'Germany', Null, 'Leipzig', ' Äußere Raustraße 23', u.Id FROM Users u WHERE EmailAddress = 'petrus.simons@leipzig.com' UNION
SELECT 'Anton', 'Kraemer', '1999-07-24', 'Germany', Null, 'Dresden', ' Rungestraße 19', u.Id FROM Users u WHERE EmailAddress = 'anton.kraemer@dresden.com' UNION
SELECT 'Karl-Heinz', 'Dieter', '2001-06-02', 'Germany', Null, 'Leipzig', ' Bärenfelser Weg 7', u.Id FROM Users u WHERE EmailAddress = 'karl-heinz.dieter@leipzig.com' UNION
SELECT 'Dominik', 'Suess', '1999-01-22', 'Germany', Null, 'Dresden', ' Grünwinkel 8', u.Id FROM Users u WHERE EmailAddress = 'dominik.suess@dresden.com' UNION
SELECT 'Heidrun', 'Gerstle', '1999-11-13', 'Germany', Null, 'Leipzig', ' Bielastraße 64', u.Id FROM Users u WHERE EmailAddress = 'heidrun.gerstle@leipzig.com' UNION
SELECT 'Stefanie', 'Stück', '1997-08-08', 'Germany', Null, 'Dresden', ' Forsthausstraße 2', u.Id FROM Users u WHERE EmailAddress = 'stefanie.stück@dresden.com' UNION
SELECT 'Judit', 'Jung', '1997-02-20', 'Germany', Null, 'Leipzig', ' Geutebrückstraße 14', u.Id FROM Users u WHERE EmailAddress = 'judit.jung@leipzig.com' UNION
SELECT 'Iris', 'Gerber', '2000-03-06', 'Germany', Null, 'Dresden', ' Löbtauer Straße 67', u.Id FROM Users u WHERE EmailAddress = 'iris.gerber@dresden.com' UNION
SELECT 'Lian', 'Siegel', '2001-05-29', 'Germany', Null, 'Leipzig', ' Breslauer Straße 49', u.Id FROM Users u WHERE EmailAddress = 'lian.siegel@leipzig.com' UNION
SELECT 'Luzia', 'Behringer', '1996-11-06', 'Germany', Null, 'Dresden', ' Lockwitzgrund 74', u.Id FROM Users u WHERE EmailAddress = 'luzia.behringer@dresden.com' UNION
SELECT 'Miriam', 'Braun', '1997-08-11', 'Germany', Null, 'Leipzig', ' Bucksdorffstraße 21', u.Id FROM Users u WHERE EmailAddress = 'miriam.braun@leipzig.com' UNION
SELECT 'Gerold', 'Schenk', '1999-03-22', 'Germany', Null, 'Dresden', ' Cornelius-Gurlitt-Straße 9', u.Id FROM Users u WHERE EmailAddress = 'gerold.schenk@dresden.com' UNION
SELECT 'Gereon', 'Ferber', '2001-12-17', 'Germany', Null, 'Leipzig', ' Haselstraße 27', u.Id FROM Users u WHERE EmailAddress = 'gereon.ferber@leipzig.com' UNION
SELECT 'Laura', 'Pahlke', '2001-12-18', 'Germany', Null, 'Dresden', ' Hopfgartenstraße 10', u.Id FROM Users u WHERE EmailAddress = 'laura.pahlke@dresden.com' UNION
SELECT 'Brigitte', 'Löwe', '1997-10-16', 'Germany', Null, 'Leipzig', ' Paul-Klöpsch-Straße 17', u.Id FROM Users u WHERE EmailAddress = 'brigitte.lowe@leipzig.com' UNION
SELECT 'Oliver', 'Wirt', '2000-12-20', 'Germany', Null, 'Dresden', ' Hainbuchenstraße 10', u.Id FROM Users u WHERE EmailAddress = 'oliver.wirt@dresden.com' UNION
SELECT 'Else', 'Yount', '2000-10-17', 'Germany', Null, 'Leipzig', ' Bamberger Straße 23', u.Id FROM Users u WHERE EmailAddress = 'else.yount@leipzig.com' UNION
SELECT 'Wendel', 'Wirt', '1996-11-14', 'Germany', Null, 'Dresden', ' Schaufußstraße 48', u.Id FROM Users u WHERE EmailAddress = 'wendel.wirt@dresden.com' UNION
SELECT 'Edmund', 'Suess', '1997-12-22', 'Germany', Null, 'Leipzig', ' Diamantstraße 6', u.Id FROM Users u WHERE EmailAddress = 'edmund.suess@leipzig.com' UNION
SELECT 'Urs', 'Baumbach', '1997-01-12', 'Germany', Null, 'Dresden', ' Königsberger Straße 12', u.Id FROM Users u WHERE EmailAddress = 'urs.baumbach@dresden.com' UNION
SELECT 'Maximilian', 'Adam', '1997-06-06', 'Germany', Null, 'Leipzig', ' Klempererstraße 22', u.Id FROM Users u WHERE EmailAddress = 'maximilian.adam@leipzig.com' UNION
SELECT 'Karlmann', 'Krause', '1996-12-28', 'Germany', Null, 'Dresden', ' Pillnitzer Straße 15', u.Id FROM Users u WHERE EmailAddress = 'karlmann.krause@dresden.com' UNION
SELECT 'Sabine', 'Denzel', '1998-07-24', 'Germany', Null, 'Leipzig', ' Arthur-Hoffmann-Straße 142', u.Id FROM Users u WHERE EmailAddress = 'sabine.denzel@leipzig.com' UNION
SELECT 'Werther', 'Schwangau', '2001-07-31', 'Germany', Null, 'Dresden', ' Alter Eichbuscher Weg 2', u.Id FROM Users u WHERE EmailAddress = 'werther.schwangau@dresden.com' UNION
SELECT 'Helma', 'Pahlke', '2001-11-18', 'Germany', Null, 'Leipzig', ' Dieskaustraße 291', u.Id FROM Users u WHERE EmailAddress = 'helma.pahlke@leipzig.com' UNION
SELECT 'Constanze', 'Buchholz', '1999-09-22', 'Germany', Null, 'Dresden', ' Bahnhofstraße 83', u.Id FROM Users u WHERE EmailAddress = 'constanze.buchholz@dresden.com' UNION
SELECT 'Krista', 'Andres', '1997-10-21', 'Germany', Null, 'Leipzig', ' Emil-Schubert-Straße 25', u.Id FROM Users u WHERE EmailAddress = 'krista.andres@leipzig.com' UNION
SELECT 'Eleonore', 'Schuhart', '2001-09-04', 'Germany', Null, 'Dresden', ' Wilhelm-Raabe-Straße 5', u.Id FROM Users u WHERE EmailAddress = 'eleonore.schuhart@dresden.com' UNION
SELECT 'Hans-Günter', 'Schlosser', '2000-01-18', 'Germany', Null, 'Leipzig', ' Drosselweg 40', u.Id FROM Users u WHERE EmailAddress = 'hans-gunter.schlosser@leipzig.com' UNION
SELECT 'Baldur', 'Essen', '1998-05-21', 'Germany', Null, 'Dresden', ' Sonnenlehne 1', u.Id FROM Users u WHERE EmailAddress = 'baldur.essen@dresden.com' UNION
SELECT 'Kerstin', 'Kistler', '2001-12-21', 'Germany', Null, 'Leipzig', ' Hainstraße 15', u.Id FROM Users u WHERE EmailAddress = 'kerstin.kistler@leipzig.com' UNION
SELECT 'Marianne', 'Frei', '2001-07-20', 'Germany', Null, 'Dresden', ' Tonbergstraße 18', u.Id FROM Users u WHERE EmailAddress = 'marianne.frei@dresden.com' UNION
SELECT 'Wiltrud', 'Dieter', '1999-04-09', 'Germany', Null, 'Leipzig', ' Baaderstraße 25', u.Id FROM Users u WHERE EmailAddress = 'wiltrud.dieter@leipzig.com' UNION
SELECT 'Arend', 'Brotz', '1997-09-20', 'Germany', Null, 'Dresden', ' Dorfstraße 10', u.Id FROM Users u WHERE EmailAddress = 'arend.brotz@dresden.com' UNION
SELECT 'Wolfram', 'Gorman', '2001-03-01', 'Germany', Null, 'Leipzig', ' Dahlienstraße 75', u.Id FROM Users u WHERE EmailAddress = 'wolfram.gorman@leipzig.com' UNION
SELECT 'Kolman', 'Jans', '1997-04-20', 'Germany', Null, 'Dresden', ' Birkigter Hang 57', u.Id FROM Users u WHERE EmailAddress = 'kolman.jans@dresden.com' UNION
SELECT 'Nathalie', 'Blumenthal', '1999-04-19', 'Germany', Null, 'Leipzig', ' Karl-Winkler-Straße 1', u.Id FROM Users u WHERE EmailAddress = 'nathalie.blumenthal@leipzig.com' UNION
SELECT 'Gisbert', 'Roth', '1997-05-03', 'Germany', Null, 'Dresden', ' Grunaweg 1', u.Id FROM Users u WHERE EmailAddress = 'gisbert.roth@dresden.com' UNION
SELECT 'Eleonore', 'Jäger', '2001-06-21', 'Germany', Null, 'Leipzig', ' Kaulbachweg 17', u.Id FROM Users u WHERE EmailAddress = 'eleonore.jager@leipzig.com' UNION
SELECT 'Siegward', 'Kröger', '1997-07-03', 'Germany', Null, 'Ebersbach-Neugersdorf', ' Goethestraße 7', u.Id FROM Users u WHERE EmailAddress = 'siegward.kroger@ebersbach-neugersdorf.com' UNION
SELECT 'Irmgard', 'Unkle', '1998-11-11', 'Germany', Null, 'Pirna', ' Varkausring 36', u.Id FROM Users u WHERE EmailAddress = 'irmgard.unkle@pirna.com' UNION
SELECT 'Carina', 'Kohler', '2001-05-17', 'Germany', Null, 'Lauter-Bernsbach', ' Am Sachsenstein 4', u.Id FROM Users u WHERE EmailAddress = 'carina.kohler@lauter-bernsbach.com' UNION
SELECT 'Ina', 'Bader', '2000-03-17', 'Germany', Null, 'Lauta b Hoyerswerda', ' Einsteinstraße 21', u.Id FROM Users u WHERE EmailAddress = 'ina.bader@lautabhoyerswerda.com' UNION
SELECT 'Jessica', 'Achilles', '2000-12-31', 'Germany', Null, 'Zwönitz', ' An den drei Teichen 22', u.Id FROM Users u WHERE EmailAddress = 'jessica.achilles@zwonitz.com' UNION
SELECT 'Sascha', 'Armbruster', '1997-06-06', 'Germany', 'Austria', 'Freiberg Sachs', ' Am Mühlgraben 22', u.Id FROM Users u WHERE EmailAddress = 'sascha.armbruster@freibergsachs.com' UNION
SELECT 'Korbinian', 'Hiedler', '1996-09-18', 'Germany', Null, 'Marienberg Erzgeb', ' Blumenweg 14', u.Id FROM Users u WHERE EmailAddress = 'korbinian.hiedler@marienbergerzgeb.com' UNION
SELECT 'Henriette', 'Wehnert', '1997-11-02', 'Germany', Null, 'Oelsnitz /Erzgeb.', ' Obere Hauptstraße 77', u.Id FROM Users u WHERE EmailAddress = 'henriette.wehnert@oelsnitzerzgeb.com' UNION
SELECT 'Gerhold', 'Messner', '2000-07-21', 'Austria', 'Germany', 'Chemnitz Sachs', ' Bernhardstraße 105', u.Id FROM Users u WHERE EmailAddress = 'gerhold.messner@chemnitzsachs.com' UNION
SELECT 'Baldur', 'Hertz', '1998-01-20', 'Germany', Null, 'Rietschen', ' Dorfstraße 2', u.Id FROM Users u WHERE EmailAddress = 'baldur.hertz@rietschen.com' UNION
SELECT 'Burchard', 'Wähner', '1998-02-09', 'Germany', Null, 'Vierkirchen b Görlitz', 'Thomas-Müntzer-Siedlung 14', u.Id FROM Users u WHERE EmailAddress = 'burchard.wahner@vierkirchen.com' UNION
SELECT 'Theda', 'Morgenstern', '1997-08-07', 'Germany', Null, 'Kamenz', ' Fabrikstraße 21', u.Id FROM Users u WHERE EmailAddress = 'theda.morgenstern@kamenz.com' UNION
SELECT 'Kunigunde', 'Schmitz', '1999-02-13', 'Austria', 'Germany', 'Torgau', ' Am Pflückuffer Wald 5', u.Id FROM Users u WHERE EmailAddress = 'kunigunde.schmitz@torgau.com' UNION
SELECT 'Hermine', 'Metz', '1996-12-31', 'Germany', Null, 'Coswig b Dresden', ' Weinböhlaer Straße 22', u.Id FROM Users u WHERE EmailAddress = 'hermine.metz@csoswigbdresden.com' UNION
SELECT 'Sophie', 'Wechsler', '1999-08-27', 'Germany', Null, 'Sehmatal-Cranzahl', ' Am Richterbusch 49', u.Id FROM Users u WHERE EmailAddress = 'sophie.wechsler@sehmatal-cranzahl.com' UNION
SELECT 'Bastian', 'Hennig', '1998-03-26', 'Germany', Null, 'Herrnhut', ' Obercunnersdorfer Straße 60', u.Id FROM Users u WHERE EmailAddress = 'bastian.hennig@herrnhut.com' UNION
SELECT 'Anna', 'Junge', '2001-03-17', 'Austria', 'Germany', 'Borna b Leipzig', ' Königsstraße 21', u.Id FROM Users u WHERE EmailAddress = 'anna.junge@bornableipzig.com' UNION
SELECT 'Eduard', 'Aue', '1998-01-30', 'Germany', Null, 'Auerbach /Vogtl.', ' Am Feldschlösschen 13', u.Id FROM Users u WHERE EmailAddress = 'eduard.aue@auerbachvogtl.com' UNION
SELECT 'Babette', 'Knef', '1998-09-12', 'Germany', Null, 'Schönbach b Löbau', ' Niederdorfstraße 26', u.Id FROM Users u WHERE EmailAddress = 'babette.knef@schonbachblobau.com' UNION
SELECT 'Hermenegild', 'Rothenberg', '1998-07-02', 'Germany', Null, 'Görlitz Neiße', ' Auenweg 5', u.Id FROM Users u WHERE EmailAddress = 'hermenegild.rothenberg@gorlitzneiße.com' UNION
SELECT 'Mathis', 'Esser', '2001-06-23', 'Germany', Null, 'Treuen Vogtl', ' Gospersgrün 13', u.Id FROM Users u WHERE EmailAddress = 'mathis.esser@treuenvogtl.com' UNION
SELECT 'Gisa', 'Aue', '1999-05-11', 'Germany', Null, 'Chemnitz Sachs', ' Charlottenstraße 13', u.Id FROM Users u WHERE EmailAddress = 'gisa.aue@chemnitzsachs.com' UNION
SELECT 'Magda', 'Lehmann', '1999-07-27', 'Germany', Null, 'Hermsdorf /Erzgeb.', ' Querweg 7', u.Id FROM Users u WHERE EmailAddress = 'magda.lehmann@hermsdorferzgeb.com' UNION
SELECT 'Isaak', 'Voll', '2001-01-15', 'Germany', Null, 'Oschatz', ' Mühlberger Straße 29', u.Id FROM Users u WHERE EmailAddress = 'isaak.voll@oschatz.com' UNION
SELECT 'Brunhilde', 'Hubert', '1998-07-21', 'Germany', Null, 'Olbernhau', ' Dörnthal 182', u.Id FROM Users u WHERE EmailAddress = 'brunhilde.hubert@olbernhau.com' UNION
SELECT 'Liane', 'Oberst', '1997-10-31', 'Germany', Null, 'Grimma', ' Ahornweg 3', u.Id FROM Users u WHERE EmailAddress = 'liane.oberst@grimma.com' UNION
SELECT 'Olaf', 'Leitner', '1997-02-10', 'Germany', Null, 'Altenberg Erzgeb', ' Waldidyller Weg 36', u.Id FROM Users u WHERE EmailAddress = 'olaf.leitner@altenbergerzgeb.com' UNION
SELECT 'Nora', 'Blau', '1999-12-16', 'Germany', Null, 'Riesa', ' Straße des 20. Juli 20', u.Id FROM Users u WHERE EmailAddress = 'nora.blau@riesa.com' UNION
SELECT 'Leni', 'Geiszler', '2001-12-19', 'Germany', Null, 'Oelsnitz /Erzgeb.', ' Hartensteiner Straße 173', u.Id FROM Users u WHERE EmailAddress = 'leni.geiszler@oelsnitzerzgeb.com' UNION
SELECT 'Torsten', 'Fleischer', '2000-03-30', 'Germany', Null, 'Plauen Vogtl', ' Semmelweisstraße 19', u.Id FROM Users u WHERE EmailAddress = 'torsten.fleischer@plauenvogtl.com'


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
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2005-07-11' AND FirstName = 'Donát' AND LastName = 'Király' UNION
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
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-09-20' AND FirstName = 'Dominik' AND LastName = 'Török' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2003-08-17' AND FirstName = 'Ákos' AND LastName = 'Lukács' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2005-09-04' AND FirstName = 'József' AND LastName = 'Varga' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2003-02-09' AND FirstName = 'Csaba' AND LastName = 'Novák' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2002-01-16' AND FirstName = 'Bence' AND LastName = 'Faragó' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2004-06-03' AND FirstName = 'Márkó' AND LastName = 'Budai' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2005-11-24' AND FirstName = 'Márió' AND LastName = 'Vass' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2002-09-20' AND FirstName = 'Vilmos' AND LastName = 'Kovács' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2004-02-02' AND FirstName = 'Endre' AND LastName = 'Orosz' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2005-09-19' AND FirstName = 'Donát' AND LastName = 'Fehér' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2005-10-18' AND FirstName = 'Domonkos' AND LastName = 'Major' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2003-08-27' AND FirstName = 'Csenge' AND LastName = 'Egyed' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2002-03-19' AND FirstName = 'Károly' AND LastName = 'Fülöp' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2006-05-29' AND FirstName = 'Henrietta' AND LastName = 'Török' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2002-10-08' AND FirstName = 'Sándor' AND LastName = 'Márton' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2006-01-11' AND FirstName = 'Ákos' AND LastName = 'Kis' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2005-01-08' AND FirstName = 'Vanessza' AND LastName = 'Kelemen' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2006-07-08' AND FirstName = 'Blanka' AND LastName = 'Orsós' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2004-07-22' AND FirstName = 'Gergely' AND LastName = 'Szekeres' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2004-03-20' AND FirstName = 'Márton' AND LastName = 'Jakab' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2006-03-26' AND FirstName = 'Barnabás' AND LastName = 'Gál' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2003-06-10' AND FirstName = 'András' AND LastName = 'Gulyás' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2005-03-28' AND FirstName = 'Antal' AND LastName = 'Mészáros' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2003-08-29' AND FirstName = 'Krisztofer' AND LastName = 'Vászoly' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2003-10-13' AND FirstName = 'Alexander' AND LastName = 'Orbán' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2004-04-09' AND FirstName = 'Nándor' AND LastName = 'Major' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2006-06-02' AND FirstName = 'Dominik' AND LastName = 'Vincze' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2006-06-18' AND FirstName = 'Patrik' AND LastName = 'Kis' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2005-11-08' AND FirstName = 'Dezső' AND LastName = 'Barna' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2003-12-13' AND FirstName = 'Károly' AND LastName = 'Halász' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2002-04-06' AND FirstName = 'Renátó' AND LastName = 'Lengyel' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2003-01-06' AND FirstName = 'Kinga' AND LastName = 'Veres' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2003-11-17' AND FirstName = 'Armand' AND LastName = 'Bodnár' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2005-06-30' AND FirstName = 'Renátó' AND LastName = 'Lakatos' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2004-08-29' AND FirstName = 'Dorina' AND LastName = 'Barna' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2003-10-13' AND FirstName = 'Endre' AND LastName = 'Kende' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2002-12-31' AND FirstName = 'Noel' AND LastName = 'Simon' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2002-01-14' AND FirstName = 'Tibor' AND LastName = 'Dobos' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2006-01-06' AND FirstName = 'János' AND LastName = 'Bakos' UNION
SELECT '2020-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2006-01-01' AND FirstName = 'Vivien' AND LastName = 'Novák' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2005-01-19' AND FirstName = 'Mónika' AND LastName = 'Németh' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-06-20' AND FirstName = 'Gerhardt' AND LastName = 'Tolkien' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-09-06' AND FirstName = 'Linda' AND LastName = 'Brodbeck' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-11-08' AND FirstName = 'Ulrike' AND LastName = 'Schuchard' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-09-07' AND FirstName = 'Micha' AND LastName = 'Bader' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-04-01' AND FirstName = 'Augusta' AND LastName = 'Vonnegut' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-04-11' AND FirstName = 'Olivia' AND LastName = 'Gross' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-09-29' AND FirstName = 'Philipp' AND LastName = 'Wolf' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-06-20' AND FirstName = 'Irmgard' AND LastName = 'Geier' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-02-15' AND FirstName = 'Florian' AND LastName = 'Nussbaum' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-02-15' AND FirstName = 'Linus' AND LastName = 'Ackermann' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-01-20' AND FirstName = 'Olivia' AND LastName = 'Gross' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-01-28' AND FirstName = 'Philipp' AND LastName = 'Wolf' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-10-11' AND FirstName = 'Irmgard' AND LastName = 'Geier' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-02-18' AND FirstName = 'Florian' AND LastName = 'Nussbaum' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-10-25' AND FirstName = 'Linus' AND LastName = 'Ackermann' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-09-17' AND FirstName = 'Tillo' AND LastName = 'Hüber' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-07-22' AND FirstName = 'Sigi' AND LastName = 'Baumer' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-07-05' AND FirstName = 'Eugen' AND LastName = 'Bauers' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-10-23' AND FirstName = 'Swanhilda' AND LastName = 'Denzel' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-06-14' AND FirstName = 'Jo' AND LastName = 'Markwardt' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-06-12' AND FirstName = 'Gitta' AND LastName = 'Stein' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-12-30' AND FirstName = 'Traugott' AND LastName = 'Hennig' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-06-24' AND FirstName = 'Lieselotte' AND LastName = 'Gehring' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-05-24' AND FirstName = 'Eckhart' AND LastName = 'Muhlfeld' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-02-24' AND FirstName = 'Sascha' AND LastName = 'Siemon' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-08-11' AND FirstName = 'Sonja' AND LastName = 'Huffmann' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-10-31' AND FirstName = 'Marianne' AND LastName = 'Lorentz' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-11-30' AND FirstName = 'Ernst' AND LastName = 'Sitz' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-02-16' AND FirstName = 'Waltraud' AND LastName = 'Geiszler' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-01-22' AND FirstName = 'Gloria' AND LastName = 'Schindler' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-07-05' AND FirstName = 'Wolf' AND LastName = 'Bachmann' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-01-20' AND FirstName = 'Petrus' AND LastName = 'Simons' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-07-24' AND FirstName = 'Anton' AND LastName = 'Kraemer' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-06-02' AND FirstName = 'Karl-Heinz' AND LastName = 'Dieter' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-01-22' AND FirstName = 'Dominik' AND LastName = 'Suess' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-11-13' AND FirstName = 'Heidrun' AND LastName = 'Gerstle' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-08-08' AND FirstName = 'Stefanie' AND LastName = 'Stück' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-02-20' AND FirstName = 'Judit' AND LastName = 'Jung' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-03-06' AND FirstName = 'Iris' AND LastName = 'Gerber' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-05-29' AND FirstName = 'Lian' AND LastName = 'Siegel' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-11-06' AND FirstName = 'Luzia' AND LastName = 'Behringer' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-08-11' AND FirstName = 'Miriam' AND LastName = 'Braun' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-03-22' AND FirstName = 'Gerold' AND LastName = 'Schenk' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-12-17' AND FirstName = 'Gereon' AND LastName = 'Ferber' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-12-18' AND FirstName = 'Laura' AND LastName = 'Pahlke' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-10-16' AND FirstName = 'Brigitte' AND LastName = 'Löwe' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-12-20' AND FirstName = 'Oliver' AND LastName = 'Wirt' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-10-17' AND FirstName = 'Else' AND LastName = 'Yount' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-11-14' AND FirstName = 'Wendel' AND LastName = 'Wirt' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-12-22' AND FirstName = 'Edmund' AND LastName = 'Suess' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-01-12' AND FirstName = 'Urs' AND LastName = 'Baumbach' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-06-06' AND FirstName = 'Maximilian' AND LastName = 'Adam' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-12-28' AND FirstName = 'Karlmann' AND LastName = 'Krause' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-07-24' AND FirstName = 'Sabine' AND LastName = 'Denzel' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-07-31' AND FirstName = 'Werther' AND LastName = 'Schwangau' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-11-18' AND FirstName = 'Helma' AND LastName = 'Pahlke' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-09-22' AND FirstName = 'Constanze' AND LastName = 'Buchholz' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-10-21' AND FirstName = 'Krista' AND LastName = 'Andres' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-09-04' AND FirstName = 'Eleonore' AND LastName = 'Schuhart' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-01-18' AND FirstName = 'Hans-Günter' AND LastName = 'Schlosser' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-05-21' AND FirstName = 'Baldur' AND LastName = 'Essen' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-12-21' AND FirstName = 'Kerstin' AND LastName = 'Kistler' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-07-20' AND FirstName = 'Marianne' AND LastName = 'Frei' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-04-09' AND FirstName = 'Wiltrud' AND LastName = 'Dieter' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-09-20' AND FirstName = 'Arend' AND LastName = 'Brotz' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-03-01' AND FirstName = 'Wolfram' AND LastName = 'Gorman' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-04-20' AND FirstName = 'Kolman' AND LastName = 'Jans' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-04-19' AND FirstName = 'Nathalie' AND LastName = 'Blumenthal' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-05-03' AND FirstName = 'Gisbert' AND LastName = 'Roth' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-06-21' AND FirstName = 'Eleonore' AND LastName = 'Jäger' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-07-03' AND FirstName = 'Siegward' AND LastName = 'Kröger' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-11-11' AND FirstName = 'Irmgard' AND LastName = 'Unkle' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-05-17' AND FirstName = 'Carina' AND LastName = 'Kohler' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-03-17' AND FirstName = 'Ina' AND LastName = 'Bader' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-12-31' AND FirstName = 'Jessica' AND LastName = 'Achilles' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-06-06' AND FirstName = 'Sascha' AND LastName = 'Armbruster' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-09-18' AND FirstName = 'Korbinian' AND LastName = 'Hiedler' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-11-02' AND FirstName = 'Henriette' AND LastName = 'Wehnert' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-07-21' AND FirstName = 'Gerhold' AND LastName = 'Messner' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-01-20' AND FirstName = 'Baldur' AND LastName = 'Hertz' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-02-09' AND FirstName = 'Burchard' AND LastName = 'Wähner' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-08-07' AND FirstName = 'Theda' AND LastName = 'Morgenstern' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-02-13' AND FirstName = 'Kunigunde' AND LastName = 'Schmitz' UNION
SELECT '2014-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1996-12-31' AND FirstName = 'Hermine' AND LastName = 'Metz' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-08-27' AND FirstName = 'Sophie' AND LastName = 'Wechsler' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-03-26' AND FirstName = 'Bastian' AND LastName = 'Hennig' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-03-17' AND FirstName = 'Anna' AND LastName = 'Junge' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-01-30' AND FirstName = 'Eduard' AND LastName = 'Aue' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-09-12' AND FirstName = 'Babette' AND LastName = 'Knef' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-07-02' AND FirstName = 'Hermenegild' AND LastName = 'Rothenberg' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-06-23' AND FirstName = 'Mathis' AND LastName = 'Esser' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-05-11' AND FirstName = 'Gisa' AND LastName = 'Aue' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-07-27' AND FirstName = 'Magda' AND LastName = 'Lehmann' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-01-15' AND FirstName = 'Isaak' AND LastName = 'Voll' UNION
SELECT '2016-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1998-07-21' AND FirstName = 'Brunhilde' AND LastName = 'Hubert' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-10-31' AND FirstName = 'Liane' AND LastName = 'Oberst' UNION
SELECT '2015-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1997-02-10' AND FirstName = 'Olaf' AND LastName = 'Leitner' UNION
SELECT '2017-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '1999-12-16' AND FirstName = 'Nora' AND LastName = 'Blau' UNION
SELECT '2019-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2001-12-19' AND FirstName = 'Leni' AND LastName = 'Geiszler' UNION
SELECT '2018-09-01', 'true', ps.Id FROM PersonStudents ps WHERE BirthDate = '2000-03-30' AND FirstName = 'Torsten' AND LastName = 'Fleischer'


INSERT INTO [DBO].[SchoolStudent](SchoolId, StudentId)
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='akos.lukacs@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='jozsef.varga@roszke.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='csaba.novak@algyo.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='bence.faragó@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='marko.budai@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='mario.vass@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='vilmos.kovacs@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='endre.orosz@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='donat.feher@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='domonkos.major@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='csenge.egyed@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='karoly.fulop@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='henrietta.torok@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='sandor.marton@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='akos.kis@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='vanessza.kelemen@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='blanka.orsos@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='gergely.szekeres@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='marton.jakab@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='barnabás.gal@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='andrás.gulyas@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='antal.meszaros@domaszek.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='krisztofer.vaszoly@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='alexander.orban@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='nandor.major@szatymaz.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='dominik.vincze@maroslele.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='patrik.kis@kiszombor.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='dezso.barna@maroslele.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='karoly.halasz@csanadpalota.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='renato.lengyel@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='kinga.veres@algyo.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='armand.bodnar@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='renato.lakatos@kiszombor.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='dorina.barna@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='endre.kende@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='noel.simon@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='tibor.dobos@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='janos.bakos@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='vivien.novak@szeged.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='monika.nemeth@szeged.com' UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='aniko.kelemen@hajunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='aniko.toth@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='veronika.szoke@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='szabina.illes@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='viktoria.dobos@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='ivett.kozma@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='orsolya.pataki@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='dorina.gaspar@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='eva.halasz@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='evelin.orosz@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='adel.biro@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='oliver.orban@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='geza.bogdan@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='kevin.kiraly@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='tamas.aprod@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='dezso.bakos@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='jozsef.sandor@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='gergo.toth@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='gergely.kerekes@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='marcell.hajdu@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='lajos.gaspar@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='donat.kiraly@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='gyorgy.voros@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='armin.juhasz@hajudorog.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='viktor.juhasz@hajudorog.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='balazs.borbely@hajudorog.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='oliver.laszlo@hajudorog.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='bendeguz.bakos@hajudorog.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='renato.torok@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='barnabas.novak@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='milan.kiss@hajdunanas.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='laura.borbely@hajdunanas.com' UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='hajnalka.nemeth@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='maria.szekely@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='szabina.vincze@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='lilla.olah@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='sara.peter@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='anita.fodor@mezômegyer.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='benedek.szalai@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='laszlo.horvath@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='bertalan.feher@dunaszeg.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='botond.lukacs@belapatfalva.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='ferenc.bogdan@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='csaba.gaspar@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='csongor.kelemen@nagybatony.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='patrik.balla@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='dominik.magyar@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='levente.sipos@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='zsofia.antal@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='ildiko.gulyas@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='hajnalka.virag@monor.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='anita.zobor@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='szabina.biro@lajosmizse.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='fruzsina.papp@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='cintia.veres@budapest.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='gerhardt.tolkien@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='linda.brodbeck@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='ulrike.schuchard@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='micha.bader@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='augusta.vonnegut@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='olivia.gross@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='philipp.wolf@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='irmgard.geier@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='florian.nussbaum@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='linus.ackermann@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='olivia.gross@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='philipp.wolf@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='irmgard.geier@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='florian.nussbaum@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='linus.ackermann@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='tillo.huber@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='sigi.baumer@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='eugen.bauers@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='swanhilda.denzel@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='jo.markwardt@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='gitta.stein@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='traugott.hennig@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='lieselotte.gehring@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='eckhart.muhlfeld@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='sascha.siemon@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='sonja.huffmann@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='marianne.lorentz@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='ernst.sitz@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='waltraud.geiszler@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='gloria.schindler@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='wolf.bachmann@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='petrus.simons@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='anton.kraemer@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='karl-heinz.dieter@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='dominik.suess@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='heidrun.gerstle@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='stefanie.stück@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='judit.jung@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='iris.gerber@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='lian.siegel@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='luzia.behringer@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='miriam.braun@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='gerold.schenk@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='gereon.ferber@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='laura.pahlke@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='brigitte.lowe@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='oliver.wirt@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='else.yount@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='wendel.wirt@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='edmund.suess@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='urs.baumbach@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='maximilian.adam@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='karlmann.krause@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='sabine.denzel@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='werther.schwangau@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='helma.pahlke@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='constanze.buchholz@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='krista.andres@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='eleonore.schuhart@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='hans-gunter.schlosser@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='baldur.essen@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='kerstin.kistler@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='marianne.frei@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='wiltrud.dieter@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='arend.brotz@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='wolfram.gorman@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='kolman.jans@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='nathalie.blumenthal@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='gisbert.roth@dresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='eleonore.jager@leipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='siegward.kroger@ebersbach-neugersdorf.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='irmgard.unkle@pirna.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='carina.kohler@lauter-bernsbach.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='ina.bader@lautabhoyerswerda.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='jessica.achilles@zwonitz.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='sascha.armbruster@freibergsachs.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='korbinian.hiedler@marienbergerzgeb.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='henriette.wehnert@oelsnitzerzgeb.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='gerhold.messner@chemnitzsachs.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='baldur.hertz@rietschen.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='burchard.wahner@vierkirchen.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='theda.morgenstern@kamenz.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='kunigunde.schmitz@torgau.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='hermine.metz@csoswigbdresden.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='sophie.wechsler@sehmatal-cranzahl.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='bastian.hennig@herrnhut.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='anna.junge@bornableipzig.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='eduard.aue@auerbachvogtl.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='babette.knef@schonbachblobau.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='hermenegild.rothenberg@gorlitzneiße.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='mathis.esser@treuenvogtl.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='gisa.aue@chemnitzsachs.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='magda.lehmann@hermsdorferzgeb.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='isaak.voll@oschatz.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='brunhilde.hubert@olbernhau.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='liane.oberst@grimma.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='olaf.leitner@altenbergerzgeb.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='nora.blau@riesa.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='leni.geiszler@oelsnitzerzgeb.com'UNION
SELECT sc.Id, st.Id FROM Schools sc, Students st INNER JOIN Persons p ON st.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='torsten.fleischer@plauenvogtl.com'

INSERT INTO [DBO].[SchoolTeacher](SchoolId, TeacherId)
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='mihaly.csombor@hajdunanas.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='120606' AND u.EmailAddress='katalin.hajdu@hajdunanas.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='robert.puzser@budapest.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='janos.kovacs@budapest.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 80798' AND u.EmailAddress='janos.kadar@budapest.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 23344' AND u.EmailAddress='barbara.barna@budapest.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 23344' AND u.EmailAddress='ervin.nagy@budaors.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='FI 23344' AND u.EmailAddress='tunde.kobzos@budapest.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='ivan.szakaly@szeged.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='andrea.szel@szeged.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='15823443206' AND u.EmailAddress='laszlo.favago@szeged.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='031603' AND u.EmailAddress='farkas.beke@eger.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='031603' AND u.EmailAddress='elemer.soos@eger.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='031603' AND u.EmailAddress='marianna.szakacs@eger.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='CZ 12345' AND u.EmailAddress='lubomir.cermak@praha.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='CZ 12345' AND u.EmailAddress='kvetoslav.kovac@praha.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='CZ 12345' AND u.EmailAddress='nina.novak@praha.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='CZ 12345' AND u.EmailAddress='alfred.hlavacek@praha.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='AT 22222' AND u.EmailAddress='thomas.wolf@graz.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='AT 22222' AND u.EmailAddress='zuzanna.ostrowski@graz.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='AT 22222' AND u.EmailAddress='gunther.bieber@graz.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='ruedi.kaufmann@dresden.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='kristin.muller@dresden.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='simon.hofmann@leipzig.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01100' AND u.EmailAddress='roger.burgstaller@leipzig.com'UNION
SELECT sc.Id, tc.Id FROM Schools sc, Teachers tc INNER JOIN Persons p ON tc.PersonId=p.Id inner join Users u ON u.Id=p.UserId WHERE sc.EduId='DE 01200' AND u.EmailAddress='rudinger.hahn@bannerwitz.com'