const express = require("express");

const app = express();


//app.use(express.json())-->  if ur calling middlewares evrywhere then do this and after that it always calls the middleware wihtout mentioning it explicitly
//app.use(middlewareFunc())
function middleWare(req,res,next) {
    next()
}



app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyKid;

  if (username != "harkirat" || password != "pass") {
    res.status(400).json({"msg": "Somethings up with your ionputs"})
    return
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({"msg": "Somethings up with your ionputs"})
    return
  }
  // do something with kidney here
  res.json({
    msg: "Your kidney is fine!"
  })

  
});
app.listen(3000)
//assignement count the number requests that come