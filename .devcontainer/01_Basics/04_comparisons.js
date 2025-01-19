//console.log(2>1)
//console.log(2<1)
//console.log(2==1)
//console.log(2!=1)

//console.log("2">1)true , converts string to number automatically
//console.log("02">1)true 

console.log(null>0);//false
console.log(null ==0);//false
console.log(null>=0);//true null converts to zero when < > operator is there

console.log(undefined>0)//false
console.log(undefined==0)//false
console.log(undefined<0)//false
// === strict check , checks value and datatype both
console.log("2"===2)//false



// stack (primitive ), heap(non-primitive)
let myYoutubeName="Aryanlearns"
let anothername=myYoutubeName
anothername="chaiaurcode"
console.log(anothername)
console.log(myYoutubeName)

let userOne={
    email:"usergoogle.com",
    upi:"user"
}
let userTwo=userOne
userTwo.email="aryan@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)//both changed