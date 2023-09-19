// object property chang
var point={
    x:10,
    y:20,
    z:30
}
//chang obj 
point.x=11;
// add object property
point.a=40
console.log(point)
//

//  ডট নোটেশন (Dot Notation):
var person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  person.firstName = "Jane";
  person.age = 25;
  
  console.log(person.firstName); // "Jane"
  console.log(person.age); // 25
  
 //  ব্র্যাকেট নোটেশন (Bracket Notation):
 var person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  person["firstName"] = "Jane";
  person["age"] = 25;
  
  console.log(person["firstName"]); // "Jane"
  console.log(person["age"]); // 25
 //  ডাইনামিক প্রোপার্টি নেম:
 var person = {
    firstName: "John",
    lastName: "Doe"
  };
  
  var propName = "firstName";
  person[propName] = "Jane";
  
  console.log(person[propName]); // "Jane"
  
