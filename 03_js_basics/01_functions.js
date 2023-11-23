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

console.log(loginUsermsg());//result shows undefined just logged in 