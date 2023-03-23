const {req,res} = require('express');
const express = require('express')
const app = express();
const ejs = require('ejs') 
app.set("view engine", "ejs")

 app.get("/",(req,res)=>{
  //   console.log("Request Made")
  //  console.log(__dirname)
   res.render("index")
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
   res.render("SignIn")
 })
//  app.get("/vicky",(req,res)=>{
//    res.render("SignIn")
//   //  console.log("hello world", {name:"Vicky", school:"SQI"})
//  })
 app.get("/SignIn",(req,res)=>{
  res.render("SignIn")
 })
 app.post("/vicky", (req, res) => {
  res.render("index")
  const username = req.body.username;
  const password = req.body.password;

  // Authenticate the user's credentials
  if (username === "vicky" && password === "password") {
    res.send("Login successful!");
  } else {
    res.send("Invalid username or password.");
  }
});