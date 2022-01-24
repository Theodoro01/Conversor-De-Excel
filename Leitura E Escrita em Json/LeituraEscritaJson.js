const fs = require("fs"); //file-system

fs.readFile("./leitura.Json", {encoding:'utf-8'}, (erro, dados) => {
    if(erro){
        console.log("Vish... Ocoreu um erro!");
    }else{
        // Isso transforma o Json em um objeto JavaScript
        var conteudo = JSON.parse(dados)

        conteudo.name = "Theodoro Vinicius"


        fs.writeFile("./leitura.json", JSON.stringify(conteudo), (erro) => {
            if(erro){
                console.log("Vish... Ocoreu um erro!");
            }
        });
        console.log(conteudo);
    }
});


// tem como colocar dentro de uma function tbm.

function modificarUsuario(nome){
    fs.readFile("./leitura.Json", {encoding:'utf-8'}, (erro, dados) => {
        if(erro){

            console.log("Vish... Ocoreu um erro!");
        }else{
            // Isso transforma o Json em um objeto JavaScript
            var conteudo = JSON.parse(dados)
    
            conteudo.name = nome;

            fs.writeFile("./leitura.json", JSON.stringify(conteudo), (erro) => {
                if(erro){
                    console.log("Vish... Ocoreu um erro!");
                }
            });
            console.log(conteudo);
        }
    });
}

modificarUsuario("Henrique");