class User{
    constructor(username){
      this.username = username
    }
    logMe(){
      console.log(`Username is ${this.username}`)
    }
    static createId(){
      //to not give access to the objects that are instanciated from this class
      return `123`
    }
  }
  class Teacher extends User{
    constructor(username,email){
      super(username)
      this.email = email
    }
  }
  const anish =  new User('anish')
  console.log(anish.createId())//gives error
  const uoi = new Teacher('ani','anjhd@jhhka')
  uoi.logMe()
  console.log(uoi.createdId())//gives error