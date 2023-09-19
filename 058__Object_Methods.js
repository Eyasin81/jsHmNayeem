//object method in js  
var obj={
   x:10,
   y:20
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
// copy new object 
let obj1=Object.assign({},obj)
obj1.xx=30;// new object add item
console.log(obj1);//output