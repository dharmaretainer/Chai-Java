const date = new Date();
console.log(date.toString()); 
console.log(date.toDateString());
console.log(date.toLocaleString());
let myCreatedDate= new Date(2023,0,23);
console.log(myCreatedDate.toDateString());
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());