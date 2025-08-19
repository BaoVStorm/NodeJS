require('dotenv').config();
const express = require("express");
const path = require('path');
const configViewEngine = require("./src/config/viewEngine");
// route
const webRoutes = require('./src/routes/web');

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || 'localhost';

// config template engine (EJS)
configViewEngine(app);

// khai báo route
app.use('/', webRoutes);
app.use('/v2', webRoutes);

app.listen(port, hostname, () => {
    console.log(`example app listening on port ${port}`)
});