function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}

//sayMyName() if we write sayMyName --> it shows only the reference

// function add2numbers(n1,n2) {
//     console.log(n1+n2);
// }

//add2numbers()//gives NaN
// add2numbers(1,3)
// add2numbers(2,"a")
// add2numbers(3,null)
function add2numbers(n1,n2) {
    // let result = n1 + n2
    // return result
    // console.log("ans");//after return nothing gets printed

    return n1 + n2

}

const res = add2numbers(3,5)
//console.log("result",res);//shows undefined u have to return from the functions


function loginUsermsg(username) {// u can pass in the parameter for the default
    if (!username){ // we can use also username === undefined
        console.log("please enter a username");
        return

    }
    return `${username} just logged in`
}

//console.log(loginUsermsg("anish"))

//console.log(loginUsermsg());//result shows undefined just logged in 

function calcCarPrice(...n1) {//passing multiple values
    return n1
}
console.log(calcCarPrice(2));//outputs in an array
console.log(calcCarPrice(2,2,43,4,4,4111,1));
//to add more numbers of parameters ... iscalled in this scenario rest operator other case separator

function calcCar(val1,val2,...num1) {
    return num1
}
console.log(calcCar(1,2,34,4,42,212));//removes the val1,val2 and returns other values in an array


const user ={
    username:"anish",
    price:199
}


function handleObj(anyObject) {
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}
//handleObj(user)
handleObj({
    username:"sam",
    price:3223
})

const newArray = [200,44,444,3433]

function returnSecond(getArray) {
    return getArray[1]
    
}
console.log(returnSecond(newArray));
console.log(returnSecond([23,334,4545,454,345]));