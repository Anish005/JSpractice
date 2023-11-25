// let a = 10
// const b = 20
// var c = 30
//var  c = 300 //global scope
let a = 3200
if (true){
    //scopes excluding objects
    let a = 10
    const b = 20
    //var c = 30
    //d = 400
    //console.log('Inner: ',a);//block scope
}


// console.log(a);//throws error
// console.log(b);//throws error
//console.log(c);//prints even though its not decalred which created ambiguity issues
//console.log(a);
//scope in browser and code environment are different

//nested scopes

function one() {
    const username = "anish"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);//throws error (here line by line execution)
    two()
}
//one()

if (true){
    const username = "anoish"
    if (username === "anoish"){
        const website = "youtube"
        console.log(username + " " + website);
    }
    //console.log(website);----> throws error
}
//console.log(username); ---> throws errors

//+++++++++++++++++++++interesting example +++++++++++++++++++

function addone(num) {
    return num + 1
    
}
addone(5)

const addTwo = function(num) {//expressions
    return num + 2
}
addTwo(5)




























