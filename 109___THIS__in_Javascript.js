// গ্লোবাল কনটেক্স্ট (গ্লোবাল স্কোপ):
console.log(this); // গ্লোবাল কনটেক্স্টে this গ্লোবাল অবজেক্ট কে সূচনা করে

//ফাংশন কলে:

function myFunction() {
   console.log(this); // ফাংশনে this ফাংশনের কনটেক্স্ট প্রদান করে
 }
 
 myFunction();
 //মেথড কলে (অবজেক্টের মেথড):

 const myObject = {
   myMethod: function() {
     console.log(this); // অবজেক্টের মেথডে this অবজেক্ট কে সূচনা করে
   }
 };
 
 myObject.myMethod();
//  কনস্ট্রাক্টর কলে (কনস্ট্রাক্টর ফাংশন):
function MyClass() {
   console.log(this); // কনস্ট্রাক্টরে this একটি নতুন অবজেক্ট সূচনা করে
 }
 
 const myInstance = new MyClass();
 