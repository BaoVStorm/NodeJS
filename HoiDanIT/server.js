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

// test connection
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'vstorm',
    port: 3307, // default: 3306
});

// simple query
connection.query(
    'SELECT * FROM Users',
    function (err, results, fields) {
        console.log(">>> results: ", results); 
        console.log(">>> fields: ", fields); 
    }
);

app.listen(port, hostname, () => {
    console.log(`example app listening on port ${port}`)
});