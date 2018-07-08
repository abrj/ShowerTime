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
const PORT = process.env.PORT || 3000
const SCHEME = 'http://'
const HOST = process.env.HOST || SCHEME + 'localhost:' + PORT

var server = app.listen(3000, function () {
    const dbPath = process.env.DB_CONNECTIONSTRING || "database.db"
    DB.setup(dbPath, ["Anders", "Mira", "Camilla", "Andreas", "Guest"], fs.existsSync(dbPath))

    //console.log("app running on.", server.address().port);
    console.log("App running on " + HOST)

});
