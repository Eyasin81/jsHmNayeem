// reset
function test(...rest){
   return rest.reduce((a,b)=>a+b)
}
console.log(test(1,2,3,4));
// speard Operator
let MyCity=["naoGaon"]
let MyWifiCity=[...MyCity,"Rajshai"]
console.log(MyWifiCity);