const userEmail = "anish.ai"
if (userEmail){
    console.log("got email");
}else{
    console.log("enter email");
}
//falsy values-------------->
//false , 0 , -0, BigInt 0n, "",null,undefined,NaN

//other all values are truthee values
// "0",'false'," ",[],{},function(){}//empty function

if (userEmail.length===0) { //to check empty array
    console.log("Array is empty");
}
const emptyObj = {}

if (Object.keys(emptyObj).length===0){//to check for empty object
    console.log("object is empty");
}

//false == 0 //true
//false==''//true
//''==0//true

//Nullish Coalescing Operator (??):null undefined

let val1;
val1 = 5 ?? 10//5
val1 = null ?? 10//check for the safety if null occured
val2 = undefined ?? 15//15
val3 = null??10??20//10

console.log(val1);//for databases


//Ternary Operator

//conition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 89"):console.log("more than 89");











