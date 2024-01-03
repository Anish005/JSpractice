//tells about the hidden properties of the object
const describe  = Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(describe)//to see the details of the properties
//like writable:false,enumerable:false
// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)//we cant override it
//we need to know about the behind the scene scenario

const chai = {
  name:'irani tea',
  price:250,
  isAvailable:true,

  orderChai : function(){
    console.log('chai nhi bani')
  }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
  //writable:false,
  enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

//iterating through objects
for (let [key,value] of Object.entries(chai)){
  if(typeof value !== 'function'){
    console.log(`${key}:${value}`) ;
  }// we get only  price and isavailable value as the property name is not enumerable
   
}