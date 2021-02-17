var fs = require('fs');
var faker = require('faker');

var data = fs.readFileSync('demo.json').toString();

var peoplex = JSON.parse(data);

console.log(peoplex);

peoplex.forEach(function(elem){
    console.log(elem.name, elem.email);
});