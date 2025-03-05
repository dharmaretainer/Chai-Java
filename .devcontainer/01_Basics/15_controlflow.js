//if
if(true){
    console.log("execute")
}
//< ,> , <= ,>=,==,!=, ===(checks datatype) 
// const balance =1000
// //don't do this , not preferred//if(balance>500) console.log("test");//Implicit scope
// //else if
//  if(balance<500){
//     console.log("Less than");
// }
// else if(balance<750){
//     console.log("Less than 750");
// }
// else{
//     console.log("Greater than 750 ");
// }
// AND , OR 
const userLoggedIn =true
const debitCard =true
const loggedInFromGoogle =false
const loggedInFromEmail =true
if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");
}