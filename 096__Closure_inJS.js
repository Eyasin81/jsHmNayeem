function test(){
   var msg="I am a Closer"
  return function(){
   console.log(msg)
  }
}
var sayMsg=test() 
sayMsg()

/* function outerFunction(x) {
   // আউটার ফাংশনের স্কোপের ভ্যারিয়েবল
   let outerVar = x;
 
   // ইন্নার ফাংশন (ক্লোজার)
   function innerFunction(y) {
     // ইন্নার ফাংশনের স্কোপের ভ্যারিয়েবল
     let innerVar = y;
 
     // আউটার ফাংশনের স্কোপের ভ্যারিয়েবলের মান ব্যবহার করে
     console.log(outerVar);
 
     // ইন্নার ফাংশনের স্কোপের ভ্যারিয়েবলের মান ব্যবহার করে
     console.log(innerVar);
   }
 
   // ইন্নার ফাংশনের রেফারেন্স রিটার্ন করে
   return innerFunction;
 }
 
 // আউটার ফাংশন কল করে এবং ইন্নার ফাংশনের রেফারেন্স পায়
 const closure = outerFunction(42);
 
 // ইন্নার ফাংশন কল করা হলে সে ক্লোজার হিসেবে আউটার ফাংশনের স্কোপের ভ্যারিয়েবলের মান এবং নিজের স্কোপের ভ্যারিয়েবলের মান দুইটি প্রিন্ট করতে পারে
 closure(10);
  */