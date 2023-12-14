// create an in memory(variable) hospital
// u need to create 4 routes (4 things the hospital can do)
//GET --- user can check how many kidneys they have and their health
//POST --- user can add a new kidney
//PUT --- user can replace a kidney and make it healthy
//DELETE --- user can remove a kidney

const express = require("express")
const app = express()

const  users = [{
    name:"ANish",
    kidneys:[{
        healthy:false
    }]
}]; //update this accordingly

app.use(express.json())



app.get("/",(req,res)=>{ //query parameters
    //write code
    const anishKidney = users[0].kidneys;
    const numOfKidneys = anishKidney.length
    let numOfHealthyKidneys = 0
    for(let i = 0; i < anishKidney.length;i++)
    {
        if (anishKidney[i].healthy){
            numOfHealthyKidneys = numOfHealthyKidneys + 1
        }    
    }
    const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys
    res.json({
        numOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
})

app.post("/",(req,res)=>{ //sending post request for now using postman
    // we send input via body
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done"
    })
})

app.put("/",(req,res)=>{ //update all the kidneys to healthy
    //if there are no unhealthy kidney to convert them into healthy send the status code 411
    for(let i = 0;  i < users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true

    }
    res.json({})//AS postman wouldnt know the data is being  put or not
})

//user can remove their unhealthy kidneys all of them
app.delete("/",(req,res)=>{
    // if there are  no unhealty kidney then return status code 411
    // only if there is atleast one unhealthy kidney is there do this else return 411
    let atleastOneUnhealthyKidney = false // we can also do this with help of a function
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true
        }
        
    }
    const newKidneys = []
    if (atleastOneUnhealthyKidney) {
        
    

    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
        
    }
}else{
    res.json({
        msg:"you have no bad kidney : status 411"
    })
}
    users[0].kidneys = newKidneys;
    res.json({
        msg:"removed unHEalthy kidneys"
    })
})

app.listen(3000)