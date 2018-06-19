var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var DB = require('./db.js')
var app = express();
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('wwwroot'))
routes(app, DB);

var server = app.listen(3000, function () {
    const dbPath = "database.db"
    DB.setup(dbPath, ["Anders", "Mira", "Camilla", "Andreas", "Guest"], fs.existsSync(dbPath))

    console.log("app running on port.", server.address().port);

});
