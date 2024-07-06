var fs=require("fs");
var data=fs.readFileSync('xy.txt');
console.log(data.toString());
console.log("program ended");