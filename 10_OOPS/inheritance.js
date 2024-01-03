class User{
    constructor(username){
      this.username = username
    }
    logMe(){
      console.log(`Username is ${this.username}`)
    }
  }
  class Teacher extends User{
    constructor(username,email,password){
      super(username)//taking this behind the scene and set the username and give you the access
      this.email = email
      this.password = password
    }
    addCourses(){
      console.log(`new courses are added by ${this.username}`)
    }
  }
  const ani = new Teacher('anish','anish@ee','123')
  ani.addCourses()
  ani.logMe()
  const uoi = new User('uoi')
  uoi.logMe()
  console.log(uoi === ani)//false
  console.log(uoi instanceof User)//false
  console.log(uoi instanceof Teacher)//true
  //uoi.addCourses()---->throws error