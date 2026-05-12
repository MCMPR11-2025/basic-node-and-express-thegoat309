let express = require('express');
let app = express();
require('dotenv').config();

app.use("/public", express.static(__dirname + '/public'));

app.use(function(req,res, next) {
    var message = req.method + " " + req.path + " - " + req.ip;
    console.log(message);
    next();
});

app.get("/", function(req, res) {
    res.sendfile(__dirname + "/views/index.html");
});

app.get('/json', function(req,res){
    require('dotenv').config();
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"})
    }
    });

    app.get('/now', function(req, res, next){
        req.time = new Date(). toString() 
    } function(req, res) {
        time: req.time;
    });
























 module.exports = app;
