const {req,res} = require('express');
const express = require('express')
const app = express();
const ejs = require('ejs'); 
const bodyParser = require('body-parser');
app.set("view engine", "ejs")

 app.get("/",(req, res)=>{
   res.render("index")
 })

 app.use(bodyParser.urlencoded({extended: true}))

 app.listen(5000,()=>{
    console.log("Server About to Start")
    console.log("Lift 1")
    console.log("Lift 2")
    console.log("Lift 3")
    console.log("Lift 4")
    console.log("Go live now")
    console.log("Your server is live Now")
 })
 app.get("/index",(req,res)=>{
   res.render("SignIn")
 })
//  app.get("/vicky",(req,res)=>{
//    res.render("SignIn")
//   //  console.log("hello world", {name:"Vicky", school:"SQI"})
//  })
 app.get("/SignIn",(req,res)=>{
  res.render("SignIn")
 })
 app.post("/SiginOut",(req,res)=>{
  res.render("SiginOut")
  console.log(req.body)
 })