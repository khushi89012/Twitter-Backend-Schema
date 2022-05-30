const express = require('express')
const connect = require("./src/configs/db")
const app = express()
const User = require("./src/controllers/user.controller")
app.use(express.json())

app.get("/",async(req,res)=>{
    res.send("Hello World")
})

app.use("/users",User)

app.listen(3000,async()=>{
try{
    await connect
    console.log("Server is running on port 3000")
}
catch(err){
    console.log(err)
}
   
    
})