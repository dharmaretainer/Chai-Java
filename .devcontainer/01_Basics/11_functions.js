//Functions


// function sayMyName(){
//     console.log("A")
// console.log("R")
// console.log("Y")
// console.log("A")
// console.log("N")

// }
// sayMyName()
// function addTwoNumbers(num1 ,num2 ){
//     console.log(num1+num2)

// }
// function addTwoNumbers(num1 ,num2 ){
//     // result=num1+num2
//     return num1+num2

// }
// const result1 =addTwoNumbers(4,6)
// // addTwoNumbers(4,6)
// console.log(result1)//nothing returned from function

// function loginUserMessage(username="aayu"){//default value
//     if(username===undefined){
//         console.log("Please enter a username")
//         return

//     }
//     return `${username} just logged in `
// }
// console.log(loginUserMessage("aryan"))
function calculateCartPrice(...num1){//... rest operator(includes every element)
    return num1
}

console.log(calculateCartPrice(200,400,500))

const user={//pass object in function
    username:"Aryan",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}
handleObject(user)

const myNewArray=[200,300,3635]//pass Array in function

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))