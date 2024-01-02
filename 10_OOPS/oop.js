const user = {
    username:'Anihs',
    loginCount:8,
    signedIn: true,
    getUserDetails:function(){
      //console.log('got user details')
     // console.log(`Username:${this.username}`)//if we use arrow function it would return me undefined
      console.log(this)
    }
  }
  //console.log(user.username)
  // console.log(user.getUserDetails())
  //console.log(this)
  function User(username,loginCount,isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
      console.log(`welcome user ${this.username}`)
    }
  
    //return this---> this is implicitly defined
    
  }
  const userOne = new User('Anihs',12,true)
  //we use the new keyword to create a specific instance
  const usertne =  User('Anihs',12,true)
  const userpne =  User('Ani',1,true)
  //above two user the values would get overridde so two prevent this we use new keyword
  console.log(userOne)
  console.log(userOne.constructor)
  console.log(usertne)