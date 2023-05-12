const express = require("express")
const bodyparser = require("body-parser")
const request = require("request") // este módulo simplifica o processo de enviar requisições HTTP/HTTPS e receber as respostas correspondentes em aplicações Node.js

const app = express()
app.use(express.static("public")) // esta linha permite importar css e ficheiros não estáticos para o servidor
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html") // envia o arquivo signup.html para o navegador quando a rota raiz é acessada
})

app.post("/",function(req,res){
    var primeironome=req.body.primeironome // recupera o valor do input "primeironome" enviado pelo formulário HTML
    var segundonome=req.body.segundonome // recupera o valor do input "segundonome" enviado pelo formulário HTML
    var email=req.body.email // recupera o valor do input "email" enviado pelo formulário HTML

    console.log(primeironome,segundonome,email) // exibe as informações recebidas no servidor
})

app.listen(3006,function(){
    console.log("Servidor esta a funcionar correctamente na porta 3006") // exibe uma mensagem no console quando o servidor é iniciado
})


// 900004d26a63a8b08d5495f170bb7247-us17     api key

// 794659bc5c.        audience ID