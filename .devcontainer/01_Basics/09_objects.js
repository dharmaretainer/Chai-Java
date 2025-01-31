//singleton
//object literals
//Object.create
const mySymbol= Symbol("key1");//define symbol 
const JsUser={
    name: "Aryan",
    age:18,
    location:"Jaipur",
    email:"aryan@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    [mySymbol]:"mykey1"


}
console.log(JsUser.name)
console.log(JsUser.age)
console.log(JsUser["email"])
console.log(JsUser[mySymbol])
JsUser.email="Aryan@chatgpt.com"
Object.freeze(JsUser)
JsUser.email="aryan@gmail.com"
console.log(JsUser)
JsUser.greeting=function(){
    console.log("Hello JS User");

}
console.log(JsUser.greeting());