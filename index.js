const {req,res} = require('express');
const mongoose = require("mongoose")
const express = require('express')
const app = express();
const ejs = require('ejs'); 
const bodyParser = require('body-parser');
const URI = "mongodb+srv://favouradebanjo603:adebanjo123456cluster0.ae47tji.mongodb.net/nodeclass_db?retryWrites=true&w=majority"

mongoose.connect(URI)
.then(()=>{
  console.log("Mongoose HandShake Approved");
})
.catch((err)=>{
  console.log("Mongoose Handshake Disconnected");
  console.log(err);
})


app.set("view engine", "ejs")

 app.get("/",(req, res)=>{
   res.render("index")
 })

 app.use(bodyParser.urlencoded({extended: true}))

 app.listen(5000,()=>{
    console.log("Server About to Start")
    console.log("Lift 1,2,3,4,5,6,WE MOVE")
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