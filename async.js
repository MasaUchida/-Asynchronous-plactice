const fs = require('fs');

function readFile(file){
    return new Promise((resolve)=>{
        fs.readFile(file, 'utf-8',(err,data)=>{
            resolve(data);
        })
    })
}

async function readFiles(){
    data001 = await readFile('test.json');
    console.log(data001);
    data002 = await readFile('test2.json');
    console.log(data002);
    data003 = await readFile('test3.json');
    console.log(data003);
}

readFiles();