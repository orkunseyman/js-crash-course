const fs = require('fs')
const save = function(data){
    fs.writeFileSync("data.json",JSON.stringify(data), err => {
        if (err) console.log("Error writing file:", err);
      });
    console.log(data);
    
}
const load = function(fileName,callback){
    fs.readFile(fileName,'utf8',(err, data) => {
        callback(err,JSON.parse(data))
    })
    
}


module.exports = {save,load}              