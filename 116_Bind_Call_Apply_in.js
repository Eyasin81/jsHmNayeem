/* function text(){
   console.log(this.a+this.b)
}
text()// NaN
text.call({})//NaN

function text1(){
   console.log(this)
}
// Call () // method-1
text1() // Window
text1.call({}) // {}
text1.call({a:"10",b:"20"})


 */


function text(b,c){
   console.log(this.a+this.b+c+d)
}
text.call({a:10,b:20},2,3)

// Call Method-1
/* 
const person = {
   firstName: "John",
   lastName: "Doe",
 };

 function greet(message) {
   console.log(`${message}, ${this.firstName} ${this.lastName}!`);
 }
 
 greet.call(person, "Hello"); // আউটপুট: "Hello, John Doe!"
  */
 // Bind method
 
 function text(b,c){
   console.log(this.a+this.b+b,c)
 }
 // bind Call Method-1
//  const obj=text.bind({a:2,b:3},2,3)
//  obj()
  
// Bind method
 
  function text(b,c){
   console.log(this.a+this.b+b+c)
 }
 // bind Call Method-1
/*  const obj=text.bind({a:2,b:3},2,3)
 obj() */ 
 // bind Call Method-2 /// 
//  const obj=text.bind({a:2,b:3})
//  obj(2,3) // এটাই বেশি ব্যবহার করা হয় । 
//  apply Method
const obj=text.apply({a:2,b:3},[2,3])