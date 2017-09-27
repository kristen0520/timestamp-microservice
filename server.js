var express=require("express");
var app = express();


var convertTime = require("./converter");

app.get("/", function(req, res){
    res.send("type a date or timestamp at the end of the url after a slash then press enter")
    res.end();
})

app.get("/:inputDate", function(req, res){

var inputDate = req.params.inputDate;

var cb = function(x){res.send(x); res.end();}

	convertTime(inputDate, cb);
    
	
})


var port = process.env.PORT || 3000;
app.listen(port, console.log("app running on port "+port))
