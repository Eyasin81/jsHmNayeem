// Pass By value Vs Pass By Referonce
//  Call By Value Vs Call By Refernce  
var n=10
function chang(n){
   n=n+100
   console.log(n);
}
chang(n) // pass by Value
console.log(n);
var obj={
   a:20,
   b:10
}
function changMe(obj){
   obj.a=obj.a+100
   obj.b=obj.b+100
   console.log(obj);
}
changMe(obj)// a:120,b:110
console.log(obj);