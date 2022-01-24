// Arquivo Reader

const fs = require('fs');
const util = require('util');

class Reader {
    constructor(){
        this.reader = util.promisify(fs.readFile);
    }
     async Read(filepath){
        try{
            return await this.reader(filepath,"utf-8")
        }catch(err){
            return undefined;
        }
    }
}

module.exports = Reader;

// Arquivo Index
const Reader = require("./Reader")

const leitor = new Reader();

async function main(){
    var dados = await leitor.Read("./users.csv");
    console.log(dados)
}

main();