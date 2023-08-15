/* console.log("hello");
function person(name){
   this.name=name
}
const p1=new person("ali")
// Object.getPrototype(p1)
// console.log(person.prototype()); 
// console.log(Object.prototype(p1));
person.prototype.PI=3.1416
console.log(p1); */
// let emp ={name:'A',location:'Mumbai',basic:5000}
//  let mgr = {name:'B'}
//  console.log(emp.__proto__ == Object.prototype)
//  console.log(mgr.__proto__ == Object.prototype)
let e="hello"
console.log(e.__proto__==String.prototype);
console.log(String.prototype);