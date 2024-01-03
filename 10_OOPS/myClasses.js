//ES6

class User {
    constructor(username,email,password){
      this.username = username;
      this.email = email;
      this.password = password
    }
    encryptPassword(){
      return `${this.password}abc`
    }
    changeUsername(){
      return   `${this.username.toUpperCase()}`
    }
  }
  const ani = new User('anish','aish@exam','1222')
  console.log(ani.encryptPassword())
  console.log(ani.changeUsername())
  //behind the scene------------------------------------------>
  //function behaving like object dont worry if there is no class
  function User2(username,email,password) {
    this.username = username
    this.email = email
    this.password = password
  }
  User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
  }
  User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
  }
  const uoi = new User2('ansnns','asad@b','121')
  console.log(uoi.encryptPassword())
  console.log(uoi.changeUsername())