// let myName = 'Anish  '
// console.log(myName.length)
// //create a method trueLength to return the length of the string removing white spaces for all strings
// console.log(myName.trueLength)

let myHeroes = ['thor','moe']

let heroPower = {
  thor : 'thunder',
  moe : 'moyemoye',
  getMoePower:function(){
    console.log(`Moe power is ${this.moe}`)
  }
}
//passing in the top level hierarchy
Object.prototype.anish = function(){
  console.log(`anish is present in all objects`)
}
heroPower.anish()
myHeroes.anish()
Array.prototype.heyanish = function(){
  console.log(`anish is saying hey`)
}
myHeroes.heyanish()
//heroPower.heyanish()//error 

//inheritance ---> prototypal inheritance
const User = {
  username : 'anish',
  email:'anish@example'
}

const Teacher  = {
  makeVideo : true
}
const TeachingSupport = {
  isAvailavle:false
}
const TASupport ={
  makeAssignment:'JS assignment',
  fullTime:true,
  __proto__:TeachingSupport
}
Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
//our original question in the top
let anotherUsername = 'anish'
String.prototype.trueLength = function(){
  console.log(`${this}`) //anish
  console.log(`${this.name}`) //undefined --- not used anymore dont use
  console.log(`True length is :${this.trim().length}`)
}
anotherUsername.trueLength()
'me'.trueLength()