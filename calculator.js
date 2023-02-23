const express = require('express');
const bodyParser=require('body-parser')
const app=express();


app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    //__dirname specifying where the current file is
res.sendFile(__dirname+"/index.html");
});


app.post("/",(req,res)=>{
    res.send("thanks for sending that");
    console.log(Number(req.body.num1+req.body.num1))
});


app.get("/bmiCalculator",(req,res)=>{
    //__dirname specifying where the current file is
    res.sendFile(__dirname+"/bmiCalculator.html")
});


app.post("/bmiCalculator",(req,res)=>{
    var weight=parseFloat(req.body.num1)
    var height=parseFloat(req.body.num2)
    res.send("your bmi is "+weight+height);
    console.log()
});

app.listen("3000",()=>{
    console.log("listening on http://localhost")
})