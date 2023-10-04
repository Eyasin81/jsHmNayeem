

const person = {
   firstName: "John",
   lastName: "Doe",
   age: 30,
   isEmployed: true,
   greet: function() {
     console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
   }
 };
 
 console.log(person.firstName); // "John"
 console.log(person.age);       // 30
 person.greet();                // "Hello, my name is John Doe."
 