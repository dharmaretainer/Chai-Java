(function chai(){
    console.log("DB CONNECTED")
})();//this ; is needed to stop iife to allow next function to work //execution wala parenthesis
//immediate execution 
//global scope ke pollution se problem hoti hai kayi baar toh use hatane ke liye humne iife use kiya 
( (name) =>{
    console.log(`ARROW FUNCTION ${name}`)
})("Aryan")