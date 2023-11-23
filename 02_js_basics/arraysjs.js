//arrays

const arr = [0,1,2,3,4,5]//0-based indexing 
//makes shallow copy ---shares the same refernce -- changes in the copy reflects on the original one

//they are not fixed
const myHeroes= ["ironman","captain","hulk"]

const arr2 = new Array(1,2,3,4)
console.log(typeof arr);//object
console.log(arr.length);

//array methods
arr.push(6)//appends to the array
arr.push(7)
arr.pop()//removes the last element of the array

arr.unshift(9)//add the element to the first of the arrays
arr.shift()//removes the first element in the array
console.log(arr);

console.log(arr.includes(9));//boolean result
console.log(arr.indexOf(9));//-1 if not present else the index of the element

const newArr = arr.join()

console.log("A",arr);
console.log(typeof newArr);//converts the array into string


//slice and splice
const myn1 = arr.slice(1,3)

console.log(myn1);
console.log("B",arr);

const myn2 = arr.splice(1,3)
console.log("C",arr);
console.log(myn2);
//slice---> doesnt manipulates the original array excludes the range
//splice ---> manipulates the original array ,includes the range




