// arquivo Reader
const fs = require('fs');

class Reader {
    
    Read(filepath){
         
        fs.readFile(filepath,'utf-8', (err, dados) =>{
            if(err){
                console.log("Vish... Ocoreu um erro!")
            }else{
                console.log(dados)
            }
        })
    }
}

module.exports = Reader;

// Arquivo Index

const Reader = require("./Reader")

const leitor = new Reader();

leitor.Read("./users.csv");