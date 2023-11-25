const user = {
    username : "anish",
    price : 999,

    welcomeMsg: function() {
        console.log(`${this.username},welcome to website`);//this --> is used while refering to the current context
        console.log(this);
    }
}

// user.welcomeMsg() //prints anish
// user.username = "max"
// user.welcomeMsg()//res - max as context changed

//console.log(this);//since u are under node env it will give you {} i.e empty  but
//the result will be different from browser---i.e Window object
function chai() {
    //console.log(this);//gives a lot of meta functions
    let username = "anish"
    //console.log(this);//same result as the line 18
    console.log(this.username);//the result would be undefined which is why this is used for objects and not for the functions

}
//chai()

const coffee = () =>{
    let username = "anish"
    console.log(this);//empty {} // watch out for the differences in the above mentioned
    console.log(this.username);//undefined
}
coffee()

const addSix = (num) =>{ // basic arrow function
    return num + 6
}
console.log(addSix(4));

//another way of writing arrow function---> implicit return

const addThree = (num) => (num + 3) // to be used in react without using the return keyword

const addObj = (num1,num2) => ({username:"anish"})//make sure to wrap under paranthesis
console.log(addObj(3,3));

// const myArray = [1,2,3,4]
// myArray.forEach(()=>)






