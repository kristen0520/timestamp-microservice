var convert = 
function (input, cb){

if(parseInt(input) == input){
    
var months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"]

var result={};
    
input = parseInt(input);
var x = input*1000;

var d = new Date(x)
var day = d.getUTCDate();
var month = d.getUTCMonth();
var year = d.getUTCFullYear();

var naturalDate = months[month] + " " + day + ", " + year;

result = {"unix": input,
"natural": naturalDate}

cb(result);


}

else{
    var time = new Date(input).getTime();
    time = time/1000
    console.log(time)
    var result = {"unix":time, "natural": input}
    cb(result);
}

}//end convert function


module.exports = convert;
