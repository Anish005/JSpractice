//object  based syntax below
const User = {
    _email:'ans@ecam',
    _password:'abc',
  
    get email(){
      return this._email.toUpperCase()
    },
    set email(value){
      this._email = value
    }
  }
  //we could use factory func
  const uoi = Object.create(User)
  console.log(uoi.email)