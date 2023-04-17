var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.send("Olá!");    
});

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
});