//reduce method--->used in shopping  cart for adding bills 
const myNums = [1,2,3]
const myTotal = myNums.reduce( function(acc,currval){
    console.log(`acc:${acc},current values:${currval}`);
    return acc + currval
},9)

console.log(myTotal);

const total = myNums.reduce( (acc,curr)=>acc+curr,0)
//writing in a  arrow function
console.log(total);

const shoppingCart = [
    {
        course:"js",
        price:3232
    },
    {
        course:"py",
        price:323
    },
    {
        course:"rb",
        price:32
    },
    {
        course:"j",
        price:3
    }
]

const pay =shoppingCart.reduce((acc,item) =>acc + item.price,0)
console.log(pay);




