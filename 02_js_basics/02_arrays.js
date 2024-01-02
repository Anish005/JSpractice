const marvel = ["thor","hulk" ,"spidey"]
const dc = ["superman","flash","batman"]

// marvel.push(dc)//enters arrays as a data on the same array kindof listoflists
// console.log(marvel[3][1]);
// console.log(marvel);


// const allheroes = marvel.concat(dc) //concat --> requires another array to return the merged arrays
// console.log(allheroes);

//spread operator usages   and yoou can try more

const all_new_heroes = [...marvel,...dc]
console.log(all_new_heroes);

const otherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = otherarray.flat(Infinity)//flatens the arrays
console.log(real_another_array);



console.log(Array.isArray("Anish"))
console.log(Array.from("Anish"))//converts into array this string

console.log(Array.from({name:"Anish"}));//output-->[] u have to specify for  keys/names

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
