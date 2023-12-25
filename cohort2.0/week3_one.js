const express = require("express")
const app = express()
//function return a boolean if  the age of person is 14
// function isOldEnough(age){ //we dont need the function after using the
//middleware below
//   if (age > 14){
//     return true
//   }else{
//     return false
//   }
// }
function isOldEnoughMiddlewares(req,res,next){
    if (age > 14){
      next();

    }else{
      res.json({
        msg:"you are not of age"
      })


}



app.get('/ride1',isOldEnoughMiddlewares,(req,res)=>{
  if(isOldEnough(req.query.age)){
    res.json({
      msg:"you have successfully riden the ride 1"
    })
  }else{
    res.status(411).json({
      msg:"sorry you are not of age now"
    })
  }

})
app.get('/ride2',(req,res)=>{
  if(isOldEnough(req.query.age)){
    res.json({
      msg:"you have successfully riden the ride 1"
    })
  }else{
    res.status(411).json({
      msg:"sorry you are not of age now"
    })
  }

})
app.listen(3000)
