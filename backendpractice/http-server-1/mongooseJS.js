const mongoose = require("mongoose")
const express = require("express")
const app = express()

app.use(express.json())
mongoose.connect("your url")

const User = mongoose.model('Users',{ name:String,email:String,password:String })

// const user = new User({
//     name:'Anish',
//     email:'anish@gmail.com',
//     password:'12344'})

// user.save()

// httpfying the above
app.post("/signup",async (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const name = req.body.name
//considering ideal condition and ignoring the checks if the username already exists in the database and all
//or you can do the check below
const existingUser = await User.findOne({email:username})
//CRUD ===> create, update, delete and update
if (existingUser) {
    return res.status(400).send("Username already exists")
}
    const users = new User({
        name:name,
        email:username,
        password:password
    })
    users.save()
    res.json({
        "msg":"User created successfully"
    })

})



