const score = 400
console.log(score);

const balance = new Number(1000)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));//give preicision value

const secondNum = 1123.85434
console.log(secondNum.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++Maths+++++++++++++++
//by default library

console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log((Math.floor(3.2)));

console.log(Math.max(4,3,3,32,12));
console.log(Math.min(4,3,3,32,12));

console.log(Math.random());//always between 0 to 1
console.log(Math.floor(Math.random()*10) + 1);// to avoid value of zero


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min))