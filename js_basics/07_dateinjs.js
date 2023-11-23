//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); //object

//let myCreatedDate = new Date(2023,0,23)
//let myCreatedDate = new Date(2023,0,23,5,3)
let myCreatedDate = new Date("2023-01-14")//months start from first YYYY-mm-dd where months starts from 1
let myCreatedDate2 = new Date("15-09-2023")

let myTimeStamp = Date.now()

//console.log(myCreatedDate.toString());//months are 0-indexing
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());//to get the timestamp of the date and compare
//converting the milliseconds to seconds
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//0-indexing month but theuser wants the standard output
console.log(newDate.getDay());//1- for Monday

//`${newDate.getDay()} and the time`


newDate.toLocaleString('default',{
    weekday:"long",
    
})








