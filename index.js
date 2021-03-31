const express = require('express')
const app = express()


app.get("/",function(rec,res){
    res.send("Olá Pamela!")    
})

app.get("/mensagem",function(rec,res){
    res.send("Essa mensagem é automatica!")
})

app.listen(3000,function(){
    console.log("conexão inicizaliada")
})