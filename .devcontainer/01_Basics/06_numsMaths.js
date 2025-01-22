 const score=400;
 console.log(score)
 const balance = new Number(300)
 console.log(balance);
 console.log(balance.toString().length);//can use any string method
 //precision value
 console.log(balance.toFixed(1));//300.0 decimal ke baad kitne digits chahiye
 const otherNumber =123.8977
 console.log(otherNumber.toPrecision(4));//123.9//  total kitne digits chahiye
 //****MATH LIBRARY**//
 console.log(Math)
 console.log(Math.abs(-4))//absolute value
 console.log(Math.round(4.6))//round off
 console.log(Math.ceil(4.2))//top value
 console.log(Math.floor(4.9))//low value
 console.log(Math.min(4,3,6,7))//minimum value
 console.log(Math.max(3,6,1,4))//maximum value

 console.log(Math.random());//random value between 0 to 1
 console.log((Math.random()*10)+1);
 const min=10
 const max=20
 console.log(Math.floor(Math.random()*(max-min+1))+min);