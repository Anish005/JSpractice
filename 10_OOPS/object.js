//everything even function in a javascript is an object ---> JS is prototype language
function multiply5(num){
    return num*5
  }
  multiply5.power = 2
  console.log(multiply5(5))
  console.log(multiply5.power)
  console.log(multiply5.prototype)
  
  function createUser(username,score){
    this.username = username
    this.score = score
  }
  
  createUser.prototype.increment = function(){
    this.score++
  }
  createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
  }
  
  const ani = new createUser('uo',23)
  const uoi =  createUser('an',90)
  
  ani.printMe()//gives ans
  uoi.printMe()//gives error ---->importance of new 
  /*
  here's what happens behind the scenes when the new keyword is used
  A new object is created : the new keyword initiates the creation of the new JS object
  A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.  this means that it has  access to properties and methods defined on the constructors prototype
  the constructor is called: the constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value  is specified  from the constructor  then JS assumes this, the newly created object, to be the intended value
  the new object si returned: After the constructor function has been called , if it doesnt return a non-primitive value(object,array,function,etc), the newly created object is returned
  */