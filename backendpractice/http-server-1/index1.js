//creating an http server
//express
//it is not node default library====> npm install express

const express = require("express");

const app = express()

function sum(n) {
    let ans = 0
    for(let i =0; i <=n;i++){
        ans  = ans + i;

    }
    return ans
}
//query parameters===> after your router ends then add /?n=3&a=3 and so on
app.get("/",(req,res)=>{  //req(request)--headers   and res(respond)-- what headers to send back and status code to send back
    const n = req.query.n // for catching the query parameter
    const ans = sum(n)
    res.send(`hi yoour ans is : ${ans}`)
})

//REQUEST METHODS imp
//GET  (get)
//POST (send or insert)
//PUT (update)
//DELETE

//STATUS CODES imp
//404 ---> when the route is not specified 
//200 ----> everything went fine
//500 -----> something went wrong
//411 -----> user inputs were incorrect
//403 ----> access denied


app.listen(3000)
