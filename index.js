const Reader = require("./Reader")
const Writer = require("./Writer")
const Processor = require("./Processor")
const leitor = new Reader();
const escritor = new Writer();
const Table = require("./Table");
const HtmlParser = require("./htmlParser")
const PDFWriter = require("./PDFWriter")

async function main(){

    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados);
    var usuarios = new Table(dadosProcessados);
    
    var html = await HtmlParser.Parse(usuarios)

    escritor.Write(Date.now() + ".html", html)
    PDFWriter.WritePDF(Date.now() + ".PDF", html)

}

main(); 