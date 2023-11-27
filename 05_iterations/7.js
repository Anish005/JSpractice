const myNums = [1,2,3,4,5,6,7,8,9]

const newNums=myNums.map( (num) => num + 10)
//if u open the scope use the return keyword
//console.log(newNums);
//CHAINING
const newNums1 = myNums
                .map( (num) => num*10)//value passes to the second chain
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)//condition wala game
console.log(newNums1);