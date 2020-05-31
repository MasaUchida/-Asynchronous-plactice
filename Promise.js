const fs = require('fs')

function readFile(file){
    return new Promise((resolve)=>{
        fs.readFile(file, 'utf-8', (err,data)=>{
            resolve(data)
        })
    })
}

readFile('test.json')
    .then((data)=>{
        console.log(data);
        return readFile('test2.json');
    })
    .then((data)=>{
        console.log(data);
        return readFile('test3.json');
    })
    .then((data)=>{
        console.log(data);
    })