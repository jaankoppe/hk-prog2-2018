# Haapsalu Kolledž - Programmeerimine II

## Teemad

* 31.08.2018 - [Sissejuhatus](#Sissejuhatus) | Node.js; NPM
* 13.09.2018 - Veebiserveri loomine, kasutades Express.js moodulit
* 26.10.2018 - MongoDB andmebaasi tutvustus ning lisamine Node.js projektis
* 08.11.2018 - WebSocketi protokolli kasutamine kasutades Socket.io moodulit 
* 21.12.2018 - Töölaua rakenduse loomine kasutades Electron-i. 
* 15.01.2019 - Kordamine või eksami esitamise tähtaeg

---

## **Eksami tingimused**

Serveripoolse veebirakenduse või Electroni töölaua rakenduse loomine, mis sisaldab:
* MongoDB andmebaasi
* Websocketi ühendust läbi socket.io

Muud nõuded:
* Andmebaasiga suhtlus peab toimuma läbi Websocketi.
* Andmebaasiga peab saama kirjeid:
    * Pärida/vaadata
    * Lisada
    * Muuta
    * Kustutada
* Kogu kood peab olema versioonihalduses
* Versioonihalduse README's peab olema juhend kuidas rakendust installeerida ja käivitada.

Lihtsalt kopeeritavaid a'la TODO app'e ei taha näha. Teema osas konsulteerida minuga kui ei ole kindel.

Töö esitamiseks saata mulle veebilink projekti repositooriumist.

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