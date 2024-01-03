//modern  syntax
class User {
    constructor(email,password){
      this.email = email
      this.password = password
    }
  //getters and setters method for a property of an object the name would remain same for the get and set method
    get email(){
      //we always return values from getters
      return this._email.toUpperCase()
    }
    set email(value){
      //we dont return at setters but set the value that is to be returned by the getters
      this._email = value
      
    }
    get password(){
      //return this.password.toUpperCase() //change this to resolve the error
      return this._password.toUpperCase()//error fixed as password gets here 
    }
    set password(value){
      //this.password = value //reason for error at set()
      this._password = value.toUpperCase()//error at get()
    }
  }
  const ani = new User('ani@exam','abc')
  console.log(ani.password)//throws error as there is a race between the constructor and set() to set the value of the variable
  console.log(ani.email)