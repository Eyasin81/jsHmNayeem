// Global Context:
console.log("hello");

console.log(this === window);
function regularFunction() {
   console.log(this);
 }
 
 regularFunction(); // `this` refers to the global object (window in a browser)
  // true
  const arrowFunction = () => {
   console.log(this);
 };
 
 arrowFunction(); // `this` context depends on where `arrowFunction` was defined
 const myObject = {
   myMethod() {
     console.log(this);
   }
 };
 
 myObject.myMethod(); // `this` refers to `myObject`
//  1. this Inside Global Scope Programize
let a = this;
console.log(a);  // Window {}

this.name = 'Sarah';
console.log(window.name); // Sarah
// 2. this Inside Function
function greet() {

   // this inside function
   // this refers to the global object
   console.log(this);
}

greet(); // Window {}
// 3. this Inside Constructor Function
function Person() {

   this.name = 'Jack';
   console.log(this);

}

let person1 = new Person();
console.log(person1.name);