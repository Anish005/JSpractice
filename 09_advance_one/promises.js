const promiseOne =  new Promise(function(resolve,reject){
    //do an async task
    //db calls, cryptography, network calls
    setTimeout(function(){
      console.log('Async task is  complete')
      resolve()
    },1000)
  })
  //.then()--> connected with resolve
  promiseOne.then(function(){
    console.log('Promise consumed')
  })
  
  new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('Async task 2')
      resolve()
    },1000)
  }).then(()=>{
    console.log('Async 2 resolved')
  })
  
  const  promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve({username:'Anish',email:'ans@example'})
      //passing object/array in result we get in the then()
    },1000)
    
  })
  promiseThree.then((user)=>{
    console.log(user)//data passed in the resolve
  })
  
  const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let error = true
      if(!error){
        resolve({username:'anish',password:'ewe'})
      }else{
        reject('ERROR:something went wrong')
      }
    },1000)
  })
  promiseFour.then((user)=>{
    console.log(user)
    return user.username
  }).then((username)=>{
    console.log(username)
  }).catch((error)=>{
    console.log(error)
  }).finally(()=>{
    console.log("the promise was kept")
  })
  
  
  
  const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let error = true
      if(!error){
        resolve({username:'anish',password:'ewe'})
      }else{
        reject('ERROR:JS went wrong')
      }
    },1000)
  })
  //issue of using async await for promises is that it doesnt handles catch gracefully but based on the scenario we can use it and they directly cant handle the errors
  async  function consumePromiseFive(){
    try{
      const response = await promiseFive
      console.log(response)
    }
    catch(e){
      console.log(e)
    }
  }
  consumePromiseFive()
  
  
  
  async function getAllusers(){
    try{
        const response = await   fetch('https://jsonplaceholder.typicode.com/users')
       const data =  await response.json() //as it takes time to get converted
        console.log(data)
    }catch(e){
      console.log('error therrre')
    }
  
  }
  getAllusers()
  
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{
    return response.json()
  })
    .then((data)=>{
      console.log(data)
    })
  .catch((error)=>{
    console.log(error)
  })