const express = require("express");
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || 'localhost';

// config template engine (EJS)
// app.set('views', './src/views');
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('sample.ejs')
});

app.listen(port, hostname, () => {
    console.log(`example app listening on port ${port}`)
});