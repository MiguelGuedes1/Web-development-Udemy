const express = require("express")
const bodyparser = require("body-parser")
const request = require("request") // este módulo simplifica o processo de enviar requisições HTTP/HTTPS e receber as respostas correspondentes em aplicações Node.js
const https=require("https")

const app = express()
app.use(express.static("public")) // esta linha permite importar css e ficheiros não estáticos para o servidor
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname + "/signup.html") // envia o arquivo signup.html para o navegador quando a rota raiz é acessada
})

app.post("/",function(req,res){
    const primeironome=req.body.primeironome // recupera o valor do input "primeironome" enviado pelo formulário HTML
    const segundonome=req.body.segundonome // recupera o valor do input "segundonome" enviado pelo formulário HTML
    const email=req.body.email // recupera o valor do input "email" enviado pelo formulário HTML

    const data = {
        members: [
            {
                email_address: email,
                status:"subscribed",
                merge_fields:{
                    FNAME: primeironome,
                    LNAME: segundonome,
                }
            }
        ]
    }

    const jsonData= JSON.stringify(data)

    const url= "https://us17.api.mailchimp.com/3.0/lists/794659bc5c"
    const options={
        method:"POST",
        auth:"miguelguedes13:53dfc1167e490c1df4583afb4d606c77-us17"
    }

   const request= https.request(url,options,function(response){

        if(response.statusCode===200){
            res.sendFile(__dirname + "/sucess.html")
        }
        else{
            res.sendFile(__dirname + "/failure.html")
        }

        response.on("data",function(data){
            console.log(JSON.parse(data))
        })
    })    

        request.write(jsonData)
        request.end()
})

app.listen(process.env.PORT||3006,function(){
    console.log("Servidor esta a funcionar correctamente na porta 3006") // exibe uma mensagem no console quando o servidor é iniciado
})


// 53dfc1167e490c1df4583afb4d606c77-us17    api key

// 794659bc5c.        audience ID