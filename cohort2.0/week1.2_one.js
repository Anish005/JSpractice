//console.log("hello world");
//console.log(a); shows that js is an interpreted language
//it runs partially then throws error unlike the compiled languages like C++

//single threaded nature of JS
//parallel programming is not possible for the js to execute program
//it is considered to be bad for scalable systems
//we can parallelize js though using the cluster module google it
let name = "anishq"
function greet(na) {
    if (na === "anish"){
    console.log(`Hello there ${na}`);}
    else{
        console.log('please bring anish');
    }
}
let ans = 0
for (let i = 0; i <= 1000000; i++) {
    ans += i
    
}
console.log(ans);

const ages = [21,12,33,44,34]

for (let index = 0; index < ages.length; index++) {
    if(ages[index] % 2 ===0){
        console.log(ages[index]);
    }
    
}
