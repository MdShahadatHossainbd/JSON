var fs = require('fs');
var faker = require('faker');

var peoplex = [];

for (var i = 0; i<10; i++){
    var people = {};
    people.name = faker.name.findName();
    people.email = faker.internet.email();
    people.address = {
        city: faker.address.city(),
        county: faker.address.country(),
        lat: faker.address.latitude(),
        long: faker.address.longitude()
    };
    peoplex.push(people);
}
fs.writeFile('demo.json', JSON.stringify(peoplex), function(err, data){
    console.log('File Created Successfully..');
});