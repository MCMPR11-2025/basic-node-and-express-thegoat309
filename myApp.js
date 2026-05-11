let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.sendfile(__dirname + "/views/index.html");
});

app.get('/json', function(req,res){
    require('dotenv').config();
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message": "Hello json"});
    } else {
        res.json({"message": "Hello json"})
    }
    });




























 module.exports = app;
