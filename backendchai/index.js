require('dotenv').config()
const express = require("express")
//we can also do import express from "express" common js or module js
const app = express()//app--> factory func
const port =  4000

app.get("/",(req,res)=>{ //'/'--> single slash is called home route
    res.send('Hello World')
})
app.get('/twitter',(req,res)=>{//req--request and res --- response
    res.send("Anish.com")

})
app.get("/login",(req,res)=>{
    res.send('<h1>please login here</h1>')
})
//need for nodemon is that the changes we make here will be automatically renewed(reloaded) without running the application again and again(restarting)
//kindof like the concept of the hotreloading that we use in the react

app.get('/youtube',(req,res)=>{
    res.send('<h2>go to youtube</h2>')
})

app.listen(process.env.PORT,()=>{//check in the .env file where the port is being set
    console.log(`Example app listening at port ${process.env.PORT}`);
})

// app.listen(port,()=>{ //general way of doing
//     console.log(`Example listening on the port ${port}`);
// })