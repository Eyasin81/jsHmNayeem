let name=Symbol()
let color=Symbol()
let make=Symbol()
let model=Symbol()
class bike{
    constructor(name,color,make,model){
        this[name]=name
        this[color]=color
        this[make]=make
        this[model]=model
    }
    draw(){
        console.log("this is a draw");
    }
}
let Bike=new bike("Bajaj","Black","India","Ak47")
// property Access 
console.log(Bike[color]);



/* 
chatGpt 

method-1

const privateData = Symbol('privateData');

class MyClass {
  constructor() {
    this[privateData] = {}; // Initialize a private data object
    this[privateData].privateProperty = 42; // Access and modify private data
  }

  getPrivateProperty() {
    return this[privateData].privateProperty; // Access private data
  }
}

const myInstance = new MyClass();

console.log(myInstance.privateData); // undefined, cannot access directly
console.log(myInstance.getPrivateProperty()); // 42, access via a method


*/

/* chatGpt 

method-2

class MyClass {
  #privateProperty = 42;

  getPrivateProperty() {
    return this.#privateProperty;
  }
}

const myInstance = new MyClass();

console.log(myInstance.#privateProperty); // SyntaxError, cannot access directly
console.log(myInstance.getPrivateProperty()); // 42, access via a method

*/