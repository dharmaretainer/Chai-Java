const myNums=[1,2,3]
// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} & current value: ${currval}`);
    
//     return acc +currval


// },0)
const myTotal=myNums.reduce((acc,curr)=>acc+curr , 0)
console.log(myTotal);
const shoppingCart=[
    {
        itemName:"js course",
        price:3999
    },
    {
        itemName:"data Science",
        price:2999
    }
]
const shopping=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(shopping);
