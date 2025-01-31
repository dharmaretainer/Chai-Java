//singleton---const tinderUser = new Object()
const tinderUser={}

tinderUser.id ="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullname:{
            //object in object(nesting)
            firstName:"Aryan",
            lastName:"Karewar"
        }

    }
}
// console.log(regularUser.fullname.userFullname.lastName)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)//{} is optional but include it, assign() copies all the enumerable from given objects and return in target object 
//most used method khali ahe
const obj3={...obj1,...obj2}  

// console.log(obj3)
const users=[
    {
        id:1,
        email:"aryan@gmail.com"
    },
    {

    },
    {

    }
]

// console.log(users[0].email)
// console.log(tinderUser)
console.log(Object.keys(tinderUser))//important
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))  
console.log(tinderUser.hasOwnProperty("isLoggedIn"))



