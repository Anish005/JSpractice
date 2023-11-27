//for of 

// ["","",""]
// [{},{},{}]//array of objects

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
    
}
const greetings = "hello world"
for (const greet of greetings) {
    //console.log(`each character is ${greet}`);
}

//Maps

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('EN',"England")
map.set('UAE',"United Arab Emirates")

//console.log(map);
for (const key  of map) {
    console.log(key);//returnsin the form of array
}

for (const [key,value] of map) {
    console.log(key,':-',value);

    //returns only the key and values and this technique is called destructuring of  the array
}

const obj ={
    'game1':'NFS',
    'game2':'Avenger'
}
//obj is not iterable through forof loop like on the maps



