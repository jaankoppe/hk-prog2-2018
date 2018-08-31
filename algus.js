const fs = require("fs");

let fail = "";
fs.readFile("fail.txt", (err, data) => {
    fail = data.toString();
    console.log("Faili sisu callbackis: ", fail);
});

let fail2 = fs.readFileSync("fail.txt", {
    encoding: "utf-8"
});


console.log("Fail 2: ", fail2);
console.log("Faili sisu: ", fail);