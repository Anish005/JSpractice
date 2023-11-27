const coding = ["js","py","rb","cpp"]

const values = coding.forEach((item)=>{
    //console.log(item);
    return item//for each doesnt returns u any value
})
//console.log(values);//returns undefined

const myNums = [1,2,3,4,5,6,7,8,9]
//filter allows you to return the value

const newNums = myNums.filter((num) => num > 4) 
const newNums1 = myNums.filter((items) =>{
    return items > 4 // if u open scope then u have to use the return key word
})
//console.log(newNums);

const newNums2 = []
myNums.forEach( (num) => {
    if (num > 4){
        newNums2.push(num)
    }
})
console.log(newNums2);







