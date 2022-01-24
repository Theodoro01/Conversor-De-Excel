const fs = require("fs"); //file-system

fs.writeFile("./EscritaDeArquivos.txt","Conteudo novo sendo passado aqui." ,(erro) => {
    if(erro){
        console.log("Vish... Ocoreu um erro!");
    }
});

