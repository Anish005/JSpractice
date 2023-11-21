const name = "anish"
const repoCount = 12

//console.log(name + repoCount + "Value"); outdated method for concatening strings
//now a days use of  backticks

console.log(`hello my name is ${name} and my repo is ${repoCount}`);//this is called string interpolation

const gameName  = new String('amos-cio-cmo-fjrji-dkf')//use for using various methods

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

//go for the mdn documents for exploring  other methods

const newString = gameName.substring(0,3)//last char at 3 notnincluded
console.log(newString);

const anotherString = gameName.slice(-7,2)
console.log(anotherString);


const newStringOne = "  anish  panda "
console.log(newStringOne);
console.log(newStringOne.trim());//reduces starting and ending spaces


const url = "https://anish.com/anish%20panda"
console.log(url.replace('%20','-'));

console.log(url.includes('amsih'));
console.log(url.includes('anish'));

console.log(gameName.split('-'));//use the same for whitespaces


