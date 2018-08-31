const express = require("express");
const app = express();

const fs = require("fs");

app.set('view engine', 'ejs');

app.use('/failid', express.static('public'));

app.get('/', (req, res) => {
    //res.send("ok");
    let title = "See pealkiri tuleb serverist";
    res.locals.title = title;
    res.render('index');
});

app.get('/fail', (req, res) => {
    // kuvame fail.txt sisu veebilehel
    // 1. lisada fs moodul
    // 2. lugeda fail
    // 3. saata faili sisu res objekti kaudu
    fs.readFile("fail.txt", (err, data) => {
        let fail = data.toString();
        res.send(fail);
    });
});

app.listen(3000, () => {
    console.log("Server kuulab porti 3000");
});