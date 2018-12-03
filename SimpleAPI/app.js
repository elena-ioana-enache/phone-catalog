var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors')
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);


var server = app.listen(3001, '0.0.0.0');
console.log('Running on 3001');
