const obj ={
    js : 'javascript',
    cpp: 'C++',
    py:'python',
    rb:'ruby'
}
//looping through objects by forin loop
for (const key in obj) {
//     console.log(key);
//     console.log(obj[key]);
//     console.log(`${key} shortcut is for ${obj[key]}`);
 }

const lang = ["js","rb","py","cpp"]
for (const key in lang) {
  console.log(key);//indices of the array
  console.log(lang[key]);
}
const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('EN',"England")
map.set('UAE',"United Arab Emirates")

for (const key in map) {
    console.log(key);//cant be iterated as it shows no result --go for the documentation
}

