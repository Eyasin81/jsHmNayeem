// Constructor function for creating a Person object
function Person(name, age) {
   this.name = name;
   this.age = age;
 }
 
 // Creating a new instance of the Person object using "new"
 var person1 = new Person("John", 30);
 
 // Accessing the properties of the newly created object
 console.log(person1.name); // Output: John
 console.log(person1.age);  // Output: 30
 