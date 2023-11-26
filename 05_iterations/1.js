//for

for (let i= 0; i<= 10; i++) {
    const element = i
    if (element == 5){
      //  console.log("5 is best");
    }
   // console.log(element);
    
}

for (let i = 0; i <=10; i++) {
    //console.log(`Outer value: ${i}`);
    for (let j = 0; j <=10; j++) {
        //console.log(`inner loop ${j} and inner loop: ${i}`);
       // console.log(i*j);
    }
    
}

let  myArray = ["marvel","dc","fox","universmyAl"]
for(let index =0; index < myArray.length; index++) {
    const element = myArray[index];
   //console.log(element); 
}

//break and continue



// for (let index = 0; index <= 20; index++) {
//     if (index == 5){
//         console.log("detected 5");
//         break
//     }
    
//     console.log(index);

    
// }
for (let index = 0; index <= 20; index++) {
    if (index == 5){
        console.log("detected 5");
        continue
    }
    
    console.log(index);

    
}












