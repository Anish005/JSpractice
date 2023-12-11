const express = require('express')
const app = express()
const port = 3000
//create a todo app that lets user store todos on the server
app.get('/route-handler', (req, res) => {
    //headers,body,query parameters
    //do machine learning model
    //db call 
  res.json({
    name:"Anish",
    age:23
  })
})




app.get('/', (req, res) => {
    //headers,body,query parameters
    //do machine learning model
    //db call 
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})