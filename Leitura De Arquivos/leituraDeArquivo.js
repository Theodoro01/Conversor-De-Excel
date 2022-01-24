const fs = require("fs"); //file-system

fs.readFile("./leituraDeArquivos.txt", {encoding:'utf-8'}, (erro, dados) => {
    if(erro){
        console.log("Vish... Ocoreu um erro!");
    }else{
        console.log(dados);
    }
});

