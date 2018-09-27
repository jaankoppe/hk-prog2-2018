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

app.get('/inspect', (req, res) => {

    console.log(res);
    res.removeHeader('X-Powered-By');
    res.send('');
});

app.get('/fail/:nr', (req, res) => {
    // :nr = req.params.nr
    let style = req.query.style;
    let title = req.query.title;
    fs.readFile("fail" + req.params.nr + ".txt", (err, data) => {
        if(data) {
            let fail = data.toString();

            if(style == "uppercase") {
                fail = fail.toUpperCase();
            }
            if(title == 1) {
                fail = "<h1>" + fail + "</h1>";
            }
            return res.send(fail); 
        }
        return res.send("Ei leitud sellist faili");
        
    });
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