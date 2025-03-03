// var c=300
let a=300
// {}//scope
if(true){
    let a=10
    const b=20
    // var c=30
    console.log("INNER:",a)

}


console.log("OUTER:",a)
// console.log(b)
// console.log(c)

function one(){
    const username="Aryan"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()
if(true){
    const username="Aryan"
    if(username==="Aryan"){
        const website="youtube"
        console.log(username+" "+website)
    }
    // console.log(website)
}
// console.log(username)

//+++++++++++++++INTERESTING++++++++++++++++++++//


function addone(num){//function
    return num +1
}
console.log(addone(5))

const addTwo =function(num){//function or expression//vegli method to declare function
    return num+2
}
addTwo(5)