const express = require("express")
const app = express()




app.use(express.json())//this middleware is used to catch the body 
app.post("/health-checkup",function(req,res){
    //kidneys = [1,2]
    const kidneys = req.body.kidneys
    /*if(!kidneys){ // one way if-else
        res.json({
            msg:"wrong inputs"
        })
    }*/
    const kidneyLength = kidneys.length

    res.send("you have" + kidneyLength + "kidneys")
})
//global catches --- another middlewares u put at the end these are error handling middlewares that gives the user beautiful errors
// it takes 4 arguments
app.use(function (err,req,res,next) {
    res.json({
        msg:"Sorry server at problem"
    })
})



app.listen(3000)