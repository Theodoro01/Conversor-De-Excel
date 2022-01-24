const Reader = require("./Reader")
const Processor = require("./Processor")
const leitor = new Reader();

async function main(){

    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados);

}

main();