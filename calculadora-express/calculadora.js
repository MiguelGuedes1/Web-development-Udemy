const express=require("express")
const app=express()

app.get("/",function(req,res){
 res.sendFile(__dirname + "/index.html")
})

app.listen(3003,function(){
    console.log("Servidor iniciado na porta 3003")
})

