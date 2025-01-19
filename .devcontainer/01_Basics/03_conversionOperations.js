let score="33"
console.log(typeof score)

let valueInNumber =Number(score)//converts in number datatype
console.log(typeof valueInNumber)

//"33"=>33
//"33abc=>NaN"
//true=>1;false=>0

let isLoggedIn="aryan"
let booleanIsLoggedIn=Boolean(isLoggedIn)//converts in boolean
console.log(booleanIsLoggedIn);
//1=>true//0=>false
//""=>false
//"aryan=>true"

let someNumber=33
let stringNumber =String(someNumber)//converts in string
console.log(typeof stringNumber)
//*****************Operations**********//
let value =3
let negValue=-value
console.log(negValue);

let str1="hello"
let str2=" aryan"
let str3 = str1+str2
console.log(str3)

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32

console.log(+true)//1
console.log(+"")//0
let prefix=100
console.log(prefix++)//101
console.log(++prefix)//101

