# Haapsalu Kolledž - Programmeerimine II

## Teemad

* 31.08.2018 - [Sissejuhatus](#Sissejuhatus) | Node.js; NPM; Veebiserveri loomine, kasutades Express.js moodulit
* 28.09.2018 - [MongoDB andmebaasi tutvustus ning lisamine Node.js projektis](#MongoDB)
* 26.10.2018 - [WebSocketi protokolli kasutamine kasutades Socket.io moodulit](#Socket.io) 
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

## **Socket.io**

Websocketi protokolli kasutamine võimaldab serveri ja kliendi vahel nö kahtepidi suhtlust. Kui HTTP puhul peab kliendi poolt tulema päring serverile ning siis server annab vastuse, siis webscoketi puhul luuakse nö. lahtine ühendus, mille abil saab server otsse kliendile teateid saata. See võimaldab arendada reaalaja rakendusi. Node.js platvormil teeb websocketi protokollil põhinevate rakenduste arendamise mugavamaks selline moodul nagu Socket.io.

Esimene asi kui me tahame lisada socket.io -d oma rakendusele, mis praegu oleme teinud, peame muutma natuke algset ülesehitust.

[Ametlikus juhendis](https://socket.io/get-started/chat/) peame panema rakenduse käima ja porti kuulama kasutades Node.js sisseehitatud http moodulit, kuid meie teeme seda otse express rakenduse kaudu (app.listen vs http.listen).

Esimese asjana installeerime mooduli:

```
npm install --save socket.io
```

Meil ei ole hetkel lisatud http moodulit seega lisame selle:

```javascript
const http = require("http");
```

Ning listen osa muudame nii:

```javascript
http.listen(3000, () => {
    console.log("Server kuulab porti 3000");
});
```

Seda on vaja, sest socket.io on nii ülesehitatud, et see teeb ühenduse läbi http mooduli, ning omakorda http moodulisse peab olema seadistatud expressi rakendus:

```javascript
// see lisada peale express rakenduse (const app) deklareerimist
const http = require('http').Server(app);
const io = require('socket.io')(http);
```

Nüüd edasi serveri pool ühenduse loomiseks on vaja lisada nö sündmuse kuulaja (event listener):

```javascript
    io.on('connection', function(socket){
        console.log('Ühendus kasutajaga on loodud');
    });
```

Et ühendus tekiks on vaja kliendi pool (ehk siis HTML failis) lisada kliendi poolne socket.io script:

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();
</script>
```

Loomulikult tuleb teha mingisugune endpoint, mis renderdab html faili, kuhu see kood panna, selle kohta on näide esimeset korrast olemas.

Kui nüüd minna sinna aadressile, kuhu lisasite kliendipoolse koodi, siis peaks serveri logisse ilmuma 'Ühendus kasutajaga on loodud'.

Nüüd edasi on vaja veel ainult selgeks teha, kuidas saab nii serveri kui kliendi poolel teateid saata ning vastu võtta. Et süsteem oleks reaalaja süsteem, (näiteks chat) siis toimib see nii, et kui klient saadab serverile teate (ütleme, et see teade on sõnum avalikku chat-i), siis server saadab selle sama sisu kõikidele klientidele tagasi. Teeme proovi:

```html
<script src="/socket.io/socket.io.js"></script>

<!-- Vaja on tekstivälja, nuppu ning ühte elementi veel, kuhu sõnumid tekitada -->
<ul id="messages"></ul>
<br>
<input type="text" id="txt">
<button id="send">Send</button>

<script>
  var socket = io();
  
  // elemendid muutujatesse
  var chat = document.getElementById("messages");
  var txt = document.getElementById("txt");
  var sendBtn = document.getElementById("send");

  // nupu funktsioon
  sendBtn.addEventListener("click", function(e) {
      // saadab teate nimega "chat" serverisse, selle peame serveri pool vastu võtma, et kõikidele klientidele edastada
      socket.emit('chat', txt.value);
      // tekstivälja sisu tühjaks
      txt.value = "";
  });

  // selle funktsiooni abil võtma serveri poolt vastu teateid nimega 'chat'
  socket.on('chat', function(msg) {
      // ning lisame saadud teate kõikide teiste teadete hulka
      chat.innerHTML += '<li>' + msg + '</li>';
  });
</script>
```
Nüüd on meil veel vaja serveri poole lisada sõnumite vastuvõtmine ning kõikidele klientidele tagasi saatmine

```javascript
    io.on('connection', function(socket){
        console.log('Ühendus kasutajaga on loodud');
        
        // võtame kliendi poolt vastu teate "chat"
        socket.on('chat', (msg) => {
            // saadame kõikidele klientidele tagasi
            io.emit('chat', msg);
        });
    });
```

Sellega on meil lihtne reaalaja rakendus olemas.

**Harjutus 1**

Täiendage rakendust selliselt, et teksti kuvamisel näitaks ka selle saatja nime. \
Mis selle jaoks kõige pealt vaja oleks? Kuidagi on vaja selgeks teha selle kasutaja nimi, kes ühenduse tekitas. Kliendi poole peaks tekitama võimaluse nime sisestuseks ning selle saatma serverile. \
Saatke serveri poolt tekst klientidele tagasi objektina - nimi ja sõnum eraldi. \

Kui server on teada saanud kasutaja nime, siis saata klientidele(kuid mitte sellele kliendile, kes liitus) teade: "{nimi} on liitunud vestlusega", kus {nimi} tähistab liitunud kasutaja nime. See funktsionaalsus on socket.io-l olemas ning kirjas [selles samas juhendis](https://socket.io/get-started/chat/) mis eelnevalt jagasin, proovige üles leida ja lisada.

**Harjutus 2**

Eelmine teema oli MongoDB andmebaasiga seotud - tegite andmemudeli blogi artikli kohta. \
Siin harjutuses seome kokku meie algelise vestlusrakenduse andmebaasiga, mis salvestaks kõik vestlused.

* Looge andmemudel vestluste kohta - mõelge ise välja, mis väljad peaksid/võiksid mudelis olla.
* Salvestada kõik vestlused andmebaasi
* Uue kasutaja ühinemisel näidata viimast 10 -t sõnumit.