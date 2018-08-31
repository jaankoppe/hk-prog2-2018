const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("ok");
});

app.get('/fail', (req, res) => {
    // kuvame fail.txt sisu veebilehel
    // 1. lisada fs moodul
    // 2. lugeda fail
    // 3. saata faili sisu res objekti kaudu

    
});

app.listen(3000, () => {
    console.log("Server kuulab porti 3000");
});