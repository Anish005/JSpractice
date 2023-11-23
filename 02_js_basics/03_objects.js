//singleton --> making objects from the constructor always
//Object.create
//object literals---> no singleton

const mySym  =  Symbol("key1")
const mySym2 = Symbol("key2")

const jsUser ={
    name:"Anish",
    "full name":"Anish Panda",//cant be accesed through .function only through square notation
    age: 23,
    mySym:"key1",
    [mySym2]:"mykey",//correct way to declare symbols
    location:"Cuttack",
    email:"anish@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);//only way
console.log(jsUser.mySym);//gives result but it is yet to be a symbol
//check the type to verify
console.log(typeof jsUser.mySym);//gives string
console.log(jsUser[mySym2]);//it is now symbol


jsUser.email = "anish@yahoo.com"//to change the assigneed value

//Object.freeze(jsUser)//doesnt allow u any changes like previously
jsUser.email = "anish@mcfst.com"
console.log(jsUser);


jsUser.greeting = function () {
    console.log(`hello user ,${this.name}`)
}
jsUser.greeting2 = function () {
    console.log("here i am")
}
console.log(jsUser.greeting);//result ---> undefined

console.log(jsUser.greeting2());
console.log(jsUser.greeting());