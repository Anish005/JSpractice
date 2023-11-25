//immediately Invoked Function Expressions (IIFE)

(function coffee() {
    //named iife
    console.log('DB CONNECTED');
})(); //if u miss the semi colon then it will throw error as the iffe func doesnt know when to stop executing so we have to explicitly mention it by adding ;
//due to the pollution in the global scope we need iife to remove it

( () =>{
    //unamed iifee
    console.log('DB CONNECT TWO');
})();

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('anish') //treat it as  a function 