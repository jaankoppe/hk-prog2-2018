# Haapsalu Kolledž - Programmeerimine II

## Teemad

* 31.08.2018 - [Sissejuhatus](#Sissejuhatus) | Node.js; NPM; Veebiserveri loomine, kasutades Express.js moodulit
* 28.09.2018 - [MongoDB andmebaasi tutvustus ning lisamine Node.js projektis](#MongoDB)
* 26.10.2018 - WebSocketi protokolli kasutamine kasutades Socket.io moodulit 
* 06.12.2018 - Töölaua rakenduse loomine kasutades [Electron](https://electronjs.org/)-i. 
* 21.12.2018 - Kordamine või eksami esitamise tähtaeg

---

## **Sissejuhatus**

### **Node.js**

Node.js on vabavaraline platvormiülene runtime keskkond serveripoolsete rakenduste arendamiseks.

Node.js populaarsuse taga on kindlasti võimalus kasutada JavaScripti ka serveripoolselt. See andis paljudele arendajatele võimaluse arendada ka serveripoolseid lahendusi, mis ehk enne mõne vajaliku programmeerimiskeele oskamatuse taha jäi.

Tänu asünkroonsele programmeerimisele on Node.js rakendus märgatavalt kiirem, kuna erinevad tegevused võivad joosta samaaegselt. Üks tegevus ei blokeeri teist, st ei pea ootama, et esimene oma tegevused lõpetaks.

Node.js kasutatakse peamiselt järgnevate lahenduste loomiseks, kuid kindlasti ei piirdu nendega:

* API-d
* Veebiserverid
* Mobiilirakenduste serveripoolsed liidesed
* Staatilised failiserverid

Allikas: [Redwall Digital Blogi](https://www.redwall.ee/blogi/139-tarkvaraarenduse-trendid-2016-aastal)

Kasutuses selliste suurte firmade poolt nagu näiteks:

* PayPal
* LinkedIn
* Yahoo
* Mozilla
* Netflix
* Uber
* GoDaddy
* Ebay

Allikas: [9 Famous Apps Built with Node.js](https://brainhub.eu/blog/9-famous-apps-using-node-js/)

### **NPM**

**NPM** ehk **Node Package Manager** on javascripti moodulite register, mille mooduleid saab lihtsalt lisada oma javascripti või Node.js arendusprojekti.

[https://www.npmjs.com/](https://www.npmjs.com/)

### **Express.js**

Express on Node.js raamistik, mille abil on lihtne luua veebiserverit. Selle saab moodulina lisada oma projekti kasutades NPM-i.
[http://expressjs.com/](http://expressjs.com/)

---

## **MongoDB**

MongoDB on maailma üks tuntumaid NoSQL andmebaasimootoreid, mis kasutab JSON süntaksit. See tähendab, et andmete struktuur on meile juba tuttaval kujul (javascript). Lisaks on ka päringute tegemine samas süntaksis.
Kui SQL tüüpi andmebaasid on relatsioonilised, siis MongoDB on NoSQL tüüpi dokumendipõhine, mis tähendab, et kirjed salvestatakse JSON objektidena.

Rohkem eestikeelset lugemist ja võrdlusi MySQL -iga on zone blogi artiklis:
[MongoDB andmebaas Zone virtuaalserveris](https://blog.zone.ee/2017/01/09/mongodb-andmebaas-zone-virtuaalserveris/)

Järgnev videoseeria on Node.js ja Express baasil veebiserveri koostamine, seal on esimeses tutvustavas videos ka õpetus, kuidas installeerida MongoDB oma arvutisse.
[Node.js & Express From Scratch](https://www.youtube.com/playlist?list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp)

_**NB - videos on MongoDB installeerimise näide Windows OS-i peal. See ei tähenda et te peate seda windowsi keskkonnas tegema. Linuxi või Mac-i jaoks leiate kindlasti õpetusi**_

Eraldi MongoDB allalaadimine: [MongoDB Download](https://www.mongodb.com/download-center#community)

Eelnevalt mainitud videoseeria 4. videos näitab kuidas ühendada andmebaas Node.js rakendusega, kasutades [mongoose](https://mongoosejs.com/) moodulit.

### **Harjutus**

Kui eelnev materjal on läbi vaadatud ja töötatud, siis harjutusena looge andmebaasi mudel (Schema) blogi artiklite kohta, mis sisaldab järgmiseid väljasid:

* title - String, artikli pealkiri
* slug - String, pealkirja põhjal genereeritud URL-i jaoks sobilik kuju (vaata [slugify](https://www.npmjs.com/package/slugify) moodulit)
* author - String, artikli autori nimi
* content - String, artikli sisu
* isPublic - Boolean, mis määrab ära kas artikkel on avalik või mitte
* dateCreated - Date, aeg, millal artikkel lisati

Järgnevalt tuleb teha kontroller, millele lisada paar endpointi ( ehk URL-i kuhu pöörduda ):

* /blog - GET päring, nimekiri blogi postitustest viitega üksikule artiklile
* /blog/:slug - GET päring, üksiku blogi postituse vaade

Ülal nimetatud MongoDB videos näitab kuidas sisestada otse shell-is kirjeid. Lihtsamal kujul kui nüüd kirjeid selle kaudu lisada, peaks tekkima sisu veebis nende url-ide pealt nähtavale.

Kes on usinam, see võib teha juurde järgnevad endpointid:

* /blog/add - GET päring, mis sisaldab vormi mille kaudu veebist uut artiklit lisada
* /blog/add - POST päring, mis saadab formi andmed serverisse ja lisab selle kaudu uue artikli andmebaasi

Viimasena on vaja teha iga GET päringu jaoks EJS fail, mis kuvab vastavat sisu.

_Nende videote ja erinevate tehnoloogiate dokumentatsioonide põhjal peab iga teise kursuse rakendusinformaatika tudeng suutma selle ülesande ära lahendada. Küsimuste korral aitab Google või materjali uuesti läbi vaatamine - uskuge, kui videot teist korda uuesti vaatate, leiate kindlasti midagi uut juurde, mis esimesel korral märkamata jäi :)_
_Kellel ikkagi küsimused õhku jäävad, siis saab küsida järgmise loengu ajal, vaatame üle_

