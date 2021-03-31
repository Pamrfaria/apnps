const express = require('express')
const app = express()

app.get("/",function(rec,res){
    res.send("Olá Pamela!")    
})

app.get("/mensagem",function(rec,res){
    res.send("Essa mensagem é automatica!")
})

app.get("/layout",function(rec,res){
    res.send("Esse é o novo Layout!")
})

app.listen(3000,function(){
    console.log("conexão inicizaliada")
})