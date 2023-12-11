function findSum(n) {
    let ans = 0;
    for (let i = 0; i<n; i++) {
      ans += i;
    }
    return ans;
  }
  
  function findSumTill100() {
    return findSum(100);
  }
  
  setTimeout(findSumTill100, 1000) //async
  console.log("hello world");//output  helloworld --> sum


  const fs = require('fs');
  //file system module
  
  
  fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log(data)
  })
  //note for the above when the thread becomes then only we can execute the pending callbacks even if it completes way earlier
//ASYNC are used for------
//do a network call
//sleep/wait for some time
// read a file
// database call

//real use of callbacks ----> async function
//disadvantages of callbacks => callback hell
//promises => promise chaining , async await

//PROMISES - syntactical way to write code async func

const fs = require('fs');

// my own asynchronous function --- below is the ugly way
function kiratsReadFile(cb) {//wrapper on async func ---fs.readFile
  fs.readFile("a.txt", "utf-8", function(err, data) {
    cb(data);//cb-- callback
  });
}
//callbck function to call
function onDone(data) {
  console.log(data)
}

kiratsReadFile(onDone)

// to the following task below
/*write an async Func()
do some sync task
want my work which async return
some other sync task
*/
 function synctask1() {
  console.log("task1");
 }
 function synctask2() {
  console.log("task2");
 }
setTimeout((data) => {
  synctask2(data)
}, 1000);
synctask1()

//promisified time delaying using promise chaining
function promisifyTimeout(duration) {
  const p = new Promise(function(resolve) {
    setTimeout(resolve,duration)
    
  })
  return p
}

//promise chaining
promisifyTimeout(1000).then(function () {
  console.log("first is done");
  return promisifyTimeout(2000)
}).then(function () {
  console.log("second is done");
  return promisifyTimeout(3000)
}).then(function () {
  console.log("third is done");
})
// real reason of promises is for async await()

