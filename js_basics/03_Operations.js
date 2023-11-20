let value = 2
let negValue = -value

//console.log(negValue);
//general operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "anish "
let str2 = "panda"
console.log(str1 + str2);
//follows toPrimitive principle for the ECMA script
console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32

console.log(+true); //1
console.log(+"");//0

let num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter//101
gameCounter++//101 by running separately note the differnce btw them in mdn
console.log(gameCounter);

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true internal conversion

//=== strict check=> which check along with the datatype
