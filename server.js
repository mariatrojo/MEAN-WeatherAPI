var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/sample-app/dist'));

app.all("*", (req, res, next) => {
	res.sendFile(path.resolve("./sample-app/dist/index.html"))
});

app.listen(8000, function() {
	console.log("Weather API listening on port 8000");
})