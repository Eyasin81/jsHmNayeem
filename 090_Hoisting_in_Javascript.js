console.log(myVar); // Outputs: undefined
var myVar = 10;
console.log(myVar); // Outputs: 10

hoistedFunction(); // Outputs: "Hello, I am hoisted!"
function hoistedFunction() {
  console.log("Hello, I am hoisted!");
}
 