//access object 
// two method are used access object method
//first
var point={
    x:10,
    y:20,
    z:30
}

// method one
console.log(point.x)
console.log(point.y)
console.log(point.z)
// method two
console.log(point["x"])
console.log(point["y"])
console.log(point["z"])

//1  ডট নোটেশন (Dot Notation):
var person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  console.log(person.firstName); // "John"
  console.log(person.lastName); // "Doe"
 // 2 ব্র্যাকেট নোটেশন (Bracket Notation):
 var person = {
    "first-name": "John",
    "last-name": "Doe"
  };
  
  console.log(person["first-name"]); // "John"
  console.log(person['last-name']); // "Doe"
 //  ব্র্যাকেট নোটেশনে প্রোপার্টির নাম ভ্যারিয়েবল হতে পারে:
 var person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  var prop = "firstName";
  console.log(person[prop]); // "John"
 //3  ডাইনামিক প্রোপার্টি নেম:
 var person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  var propertyToAccess = "lastName";
  
  console.log(person[propertyToAccess]); // "Doe"
 
  
  //4 মাল্টিপল প্রোপার্টি এক্সেস:
  var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  console.log(person.firstName, person.lastName); // "John Doe"
  console.log(person["firstName"], person["age"]); // "John 30"
  

