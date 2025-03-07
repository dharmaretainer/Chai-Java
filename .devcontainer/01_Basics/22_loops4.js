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