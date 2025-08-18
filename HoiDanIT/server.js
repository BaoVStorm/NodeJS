const express = require("express");
const path = require('path');

const app = express();
const port = 8080;

// config template engine (EJS)
// app.set('views', './src/views');
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('sample.ejs')
});

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
});