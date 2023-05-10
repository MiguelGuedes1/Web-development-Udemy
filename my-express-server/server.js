const express= require("express")
const app=express()

app.get("/",function(request,response){
   response.send("<h1>O meu primeiro servidor</h1>")
})

app.get("/contact",function(req,res){
    res.send("<h2>Contact me at miguelsilvaguedes@hotmail.com</h2>")
})

app.get("/about_me",function(req,res){
    res.send("O meu nome é Miguel Guedes e quero ser FullStack Developer")
})

app.listen(3001,function(){
    console.log("Servidor iniciado na porta 3001")
})

