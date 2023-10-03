// Properties 
//  method-1 
// objectName.propertyName = propertyValue;
const person = {
   firstName: 'John',
   lastName: 'Doe',
   age: 30
 };
 
 console.log(person.firstName); // 'John'
 console.log(person.lastName);  // 'Doe'

//  Methods-2 (মেথড):

/*
 objectName.methodName = function(parameters) {
   // মেথডের কোড এখানে
 }; 
 
 */
 

 const person1 = {
   firstName: 'John',
   lastName: 'Doe',
   sayHello() {
     console.log('Hello, ' + this.firstName + ' ' + this.lastName);
   }
 };
 
 person1.sayHello(); // 'Hello, John Doe'
 


 
