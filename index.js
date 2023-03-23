const {req,res} = require('express');
const express = require('express')
const app = express();
const ejs = require('ejs') 
app.set("view engine", "ejs")

 app.get("/",(req,res)=>{
    console.log("Request Made")
   console.log(__dirname)
   res.sendFile(__dirname + "/index.html")
 })

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
   res.render("index")
 })
 app.get("/vicky",(req,res)=>{
   res.render("vicky")
   console.log("hello world", {name:"Vicky", school:"SQI"})
 })
console.log("hello world")