// const user={
//     username:"Aryan",
//     price:999,

//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);
//         console.log(this)
//     }
//     //current context madhe apan this keyword use krto
// }
// user.welcomeMessage()
// user.username="Neharika"
// user.welcomeMessage()
// console.log(this)
// function chai(){
//     let username="Aryan"
//     console.log(this.username);//bas object ke andar ki kaam kr raha hai this function
// }
// chai()
// const chai = () => {//arrow function
//     let username="Aryan"
//     console.log(this);
// }
// chai()
const addTwo=(num1,num2)=>{//curly braces mein wrap kiya toh return statement likhna padega 
    return num1+num2
} 
console.log(addTwo(3,4))
const addTwoImplicitreturn=(num1,num2)=> num1+num2//Implicit return
console.log(addTwoImplicitreturn(3,4))
const addTwoImplicitreturn2=(num1,num2)=> (num1+num2)//Implicit return,circular braces mein wrap kiya toh return statement nahi likhna padega
console.log(addTwoImplicitreturn(3,4))
//agar object return karna hai 
const objectreturn=()=>({username:"Aryan"})//paranthesis is must here
console.log(objectreturn())

