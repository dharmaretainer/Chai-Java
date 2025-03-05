const userEmail ="aryan@gmail.ai"
if(userEmail){
    console.log("Got User Email.");
}
else{
    console.log("Don't have user email.");
}
//truthy or Falsy values
// //falsy
// false , 0 ,-0, BigInt 0n, "", null, undefined, NaN
//truthy - other than falsy values
// "0","false"," ", [], {}, function(){} 
//


//Nullish Coalescing Operator(??): null undefined
//basically ek fallback hai , agar errors aaye toh hume kaise unhe handle karenge
let val1;
val1=5?? 10
console.log(val1)
val1 =null??10
console.log(val1)
val1=undefined??15
console.log(val1)
val1=null??10??20
console.log(val1)

//Terniary Operator - different from Nullish operator completely
// condition ? true:false
const iceTeaPrice=100
iceTeaPrice>=80 ? console.log("more than 80"):console.log("less than 80");