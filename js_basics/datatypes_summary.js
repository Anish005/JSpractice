//summarizing the datatypes-- primitive and non - primitive
//Primitive (call by value) 
//7 types-- String,Number,Boolean,null,undefined,Symbol(tomakethevalueunique),BigInt
const score = 100
const scoreValue = 100.304

const isLogged = false
const outsideTemp = null //typeof result ---> object
let userEmail;//typeof ---> undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);//false

const bigNumber = 32423423424234423423n


//Non-primitive(Reference types)

//Arrays,Objects,Functions

const heroes = ['ironman','captain','doga']
let Obj ={
    name:"hitesh",
    age: 25,
}

const myFunction = function (){ //typeof --> function(object function)
    console.log("ANish");

}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//memory ---- stack and heap
//stack - primitive and heap - Non - primitive

let myname = "anish"
let anothername = "manish"

console.log(myname);
console.log(anothername);

let userOne = {
    email:"anishapnda@gmail.com",
    upi:"dhbdhs@ybl"
}
let userTwo = userOne

userTwo.email = "anishapnfda@amazon.com"

console.log(userOne.email);
console.log(userTwo.email);//they point to the same reference so it changes the value in both


