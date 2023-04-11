const {req,res} = require('express');
const mongoose = require("mongoose")
const express = require('express')
const app = express();
const ejs = require('ejs'); 
const bodyParser = require('body-parser');
const URI = "mongodb+srv://favouradebanjo603:oluyomiadebanjo@cluster0.ae47tji.mongodb.net/nodeclass_db?retryWrites=true&w=majority"
mongoose.connect(URI)
.then(()=>{
  console.log("Mongoose HandShake Approved");
  console.log("Mongoose Activated Connected");
})
.catch((err)=>{
  console.log("Mongoose Handshake Disconnected");
  console.log(err);
})

let userSchema = {
  firstname:{type:String, required:true},
  lastname:{type:String, required:true},
  email:{type:String, required:true,unique:true},
  password:{type:String, required:true},
}


let userModel = mongoose.model("Users_Collection", userSchema)
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
    // res.send("HI Index")
    res.render("first")
})

app.get("/okay",(req,res)=>{
    res.render("femi", {name:"Ajala",school:"SQI"})
})

app.get("/signup",(req,res)=>{
    res.render("signup",{message:""})
})

app.get("/signin",(req,res)=>{
    res.render("signin",{message:""})
})
app.get("/dash",(req,res)=>{
    res.render("dashboard")
})
