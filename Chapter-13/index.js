var person={
   name:"eyasina81@gmail.com"
}
// Method-1  yes prototype
// console.log(person);
// Method-2 no-prototype
/* for(var i in person){
   console.log(i);
} */
// Method-3 No Prototype
var des=Object.getOwnPropertyDescriptor(person,"name")
// console.log(des);