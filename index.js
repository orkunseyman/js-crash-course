const Users = require('./user.js'); 
const Categories = require('./category.js'); 
const Maps = require('./map.js'); 
const Chalk = require('chalk');
const Database = require('./database');



let orkun = new Users("Orkun","orkunseyman@gmail.com","1234");

// let jsMap = new Maps("Js Road Map","Lorem ipsum dolor sit amet",development);
// let goMap = new Maps("Go Road Map","Lorem ipsum dolor sit amet",development);
// let cMap = new Maps("C Road Map","Lorem ipsum dolor sit amet",development);
// let javaMap = new Maps("Java Road Map","Lorem ipsum dolor sit amet",development);

// orkun.createMap(jsMap);
// orkun.followCategory(development);
console.log("Following Categories Maps");
//orkun.printFollowingMaps();
console.log("Created Maps");
orkun.printCreatedMaps();
const chalk = require('chalk');

// Database.save(development);
Database.load('data.json',(err,loadedFile) => {
    let development=Categories.create(loadedFile);
    console.log(development.name);
});
