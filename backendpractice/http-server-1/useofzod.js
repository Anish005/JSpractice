//use case of zod

const express = require("express");
const zod = require("zod")
const app = express();

const schema = zod.array(zod.number());

//creating schema of zod for various input types to do the input validation 
//{
    // email:string => email
    // password : atleast 8 characters
    // country: "IN" ,"US"
const schema1 = zod.object({
    email:zod.string().email(),
    password: z.string(),
    country: z.literal("IN").or.z.literal("US")
})

  
app.use(express.json());

app.post("/health-checkup",  function (req, res) {
  // kidneys = [1, 2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys)//safeParse to check 
  if (!response.success){
    res.status(411).json({
        msg:"Invalid input"
    })
  }
  res.send({
    response
  })
});


app.listen(3000);