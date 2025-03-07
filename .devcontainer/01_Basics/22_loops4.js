const coding =["js","ruby","java","python"]
// coding.forEach(function (item){
//     console.log(item);

// })
coding.forEach((item)=>{
    console.log(item);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe);

coding.forEach((item,index,arr)=>{
    console.log(item, index, arr);
})

const myCoding=[
    {
        languageName:"js",
        languageFileName:"javascript"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }

]
myCoding.forEach((item)=>{
    console.log(item.languageName)
})

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>num>4)
// console.log(newNums);
//else
const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>{//scope aala aata return keyword use karaycha
//     return num>4;
// })

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)

    }
    
})
console.log(newNums);

