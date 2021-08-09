const express = require('express');
let app = express();

app.use(express.static(__dirname + "/dist/NerfGFH"));

app.get("/", (req, res) => {
    res.redirect(308, '/index.html');
});

app.get("/home", (req, res) => {
    res.redirect(308, '/index.html');
});

app.get("/buy", (req, res) => {
    res.redirect(308, '/index.html');
});


app.listen(process.env.PORT || 80);