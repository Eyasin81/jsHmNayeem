// Properties 
objectName.propertyName = propertyValue;
const person = {
   firstName: 'John',
   lastName: 'Doe',
   age: 30
 };
 
 console.log(person.firstName); // 'John'
 console.log(person.lastName);  // 'Doe'

//  Methods (মেথড):

objectName.methodName = function(parameters) {
   // মেথডের কোড এখানে
 };
 

 const person1 = {
   firstName: 'John',
   lastName: 'Doe',
   sayHello: function() {
     console.log('Hello, ' + this.firstName + ' ' + this.lastName);
   }
 };
 
 person1.sayHello(); // 'Hello, John Doe'
 


 
