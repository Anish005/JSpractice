const coding = ["js","py","rb","cpp"]
coding.forEach( function(item) { //forEach asks for callbackfunc i.e having no name
   // console.log(item);
})

coding.forEach( (val)=>{
    //console.log(val);
})

function printMe(item) {
   // console.log(item);
}
coding.forEach(printMe)//just give the reference dont execute


coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})

const myCoding = [
    {
        lang:"java",
        ls:"ja"
    },
    {
        lang:"python",
        ls:"py"
    }

]

myCoding.forEach((item)=>{
    console.log(item.lang);
})








