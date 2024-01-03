function SetUsername(username){
    //complex  db calls
    this.username = username
    console.log('called')
  }
  
  function createUser(username,email,password){
    SetUsername(username)//this.username = username
    SetUsername.call(username)//use of cal to explicitly the aove line which is not being called but here again there wont be change in the output
    SetUsername.call(this,username)//sets  the username
    this.email= email
    this.password = password
  }
  const ani = new createUser('anis','ansh@exam','212')
  console.log(ani)//outputs only email and password
  //therefore inside here only reference but wasnt call actually