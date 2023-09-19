// var obj={}
// // console.log(typeof obj)
// obj.x=10;
// console.log(obj)
//obj leateral
// var point={
//     x:10,
//     y:20,
        
// }
// point.z=30;
// console.log(point)
//obj constructor
// var obj=Object()
// obj.a=10;
// obj.b=20;
// obj.c=30;
// console.log(obj)
// var obj1=new Object()
// obj1.a=30;
// obj1.b=40;
// obj1.c=50;
// console.log(obj1)
//1. অবজেক্ট লিটারাল:
var person = {
   firstName: "John",
   lastName: "Doe",
   age: 30
 };
//  2 অবজেক্ট কন্সট্রাক্টর:
function Person(firstName, lastName, age) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.age = age;
 }
 
 var person = new Person("John", "Doe", 30);
 console.log(person);

// 3 অবজেক্ট ফ্যাক্টরি:
 function createPerson(firstName, lastName, age) {
   return {
     firstName: firstName,
     lastName: lastName,
     age: age
   };
 }
 
 var person = createPerson("John", "Doe", 30);
 
 
// 4   অবজেক্ট মেথড:

var person = {
   firstName: "John",
   lastName: "Doe",
   sayHello: function() {
     console.log("Hello, " + this.firstName + " " + this.lastName);
   }
 };
 
 person.sayHello(); // "Hello, John Doe"
 