//Array
const myArr =[0,1,2,3,4,5]
const myHeros=["shaktiman","thor"]
const myArr2= new Array(3,4,9,5)
console.log(myArr);
console.log(myHeros);
console.log(myArr2);

//Array Methods

// myArr.push(6)
// console.log(myArr);
// myArr.pop()//last value remove
// myArr.unshift(9)//first position add
// myArr.shift()//removes first element
// myArr.includes(9);
// myArr.indexOf(9);
// myArr.slice(1,3)//excludes 3 after operation original array(myArr) remains same 
// myArr.splice(1,3)//includes 3 after operation splice portaion removes from original array 
const marvel=["Ironman","spiderman","thor","captain america"]
const dc=["superman","flash","batman"]
//const pushheros=marvel.push(dc)
const allheros=marvel.concat(dc)
//console.log(pushheros)
console.log(allheros);
//one more method to concat
const all_new_heros=[...marvel,...dc];//preferable 
console.log(all_new_heros);
