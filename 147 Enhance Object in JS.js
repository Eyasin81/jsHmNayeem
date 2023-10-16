// Mathod-1
/* let a=10,b=20
let obj={
   a:a,
   b:b
}
console.log(obj); */
/* Mathod-2 */
let a=10,b=20
let obj={
   a,
   b
}
console.log(obj);
// Mathod-3
let aa=10,bb=20
let obj1={
   aa,
   bb,
   // method-3
   /* print:function(){
      console.log(this);
   } */
   // method-4 ES6 function  লেখা লাগবে না
   print(){
      console.log(this);
   }
}
// console.log(obj.print());
obj1.print()