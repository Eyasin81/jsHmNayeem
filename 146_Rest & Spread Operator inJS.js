
function rest(...e){
   return e.reduce((a,b)=>a+b)
}
console.log(rest(1,2,3,4,5))
// object reset
let obj={
   a:10,
   b:30,
   c:33
}
let obj2={
   ...obj
}
console.log(obj2)
/* 
// reset
function test(...rest){
   return rest.reduce((a,b)=>a+b)
}
console.log(test(1,2,3,4));
// speard Operator
let MyCity=["naoGaon"]
let MyWifiCity=[...MyCity,"Rajshai"]
console.log(MyWifiCity);

*/