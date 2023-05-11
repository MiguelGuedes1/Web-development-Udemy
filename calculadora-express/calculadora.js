/*  Esta é uma aplicação Express.js que fornece uma calculadora básica e um calculador de BMI */


const express=require("express")
const bodyparser=require("body-parser")

const app=express()      // Inicio da aplicaçao Express
app.use(bodyparser.urlencoded({extended:true}))     // incluir o Npm body-parser neste file JS



app.get("/",function(req,res){       // Rota principal que envia o arquivo index.html para o cliente
 res.sendFile(__dirname + "/index.html")    
})

app.post("/",function(req,res){           //     O que vai ser apresentado ao cliente ( POST )
    var n1=Number(req.body.num1)
    var n2=Number(req.body.num2)
    var resultado=n1+n2

    res.send(resultado.toString())
})

app.get("/bmi.calculator",function(req,res){
    res.sendFile(__dirname + "/bmi.calculator.html")
})

app.post("/bmi.calculator",function(req,res){
    var peso=parseFloat(req.body.weight)
    var altura=parseFloat(req.body.height)
    var bmi=peso/(altura*altura)

    var bmi=peso/(altura*altura)
        res.send(`O seu Bmi é ${bmi.toFixed(2).toString()}`)
})

app.listen(3003,function(){           // Inicio do servidor na porta 3003
    console.log("Servidor iniciado na portaaa 3003")
})


