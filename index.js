const express = require('express')
const app = express()


app.get("/",function(rec,res){
    res.send("Olá mundo!")    
})

app.listen(3000,function(){
    console.log("conexão inicizaliada na porta 3000")
})