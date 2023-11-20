let score = 33
let score1 = "33" //check for null-->converts it into 0 in number
console.log(typeof(score));
console.log(typeof score);//output -> number

let valueInNumber = Number(score1) // conversion from string to number
console.log(typeof(valueInNumber));
console.log(valueInNumber);//but sometimes it converts ands gives the result NaN


let firstValue = Number(score1)
console.log(firstValue);


let score2 = "33abc"
let secondvalue = Number(score2)
console.log(secondvalue);

//"33" => 33
//"33abc" => NaN
// true => 1 ; false => 0
let isLogged = ""
let booleanLogged = Boolean(isLogged)
console.log(booleanLogged);
//1 => true ; 0 => false
// "" => false; "anish"=> true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);