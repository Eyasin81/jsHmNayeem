function outer() {
   var x = 10; // x ভ্যারিয়েবলটি outer() ফাংশনের লেক্সিক্যাল স্কোপে ডিক্লেয়ার হয়
   
   function inner() {
     var y = 5; // y ভ্যারিয়েবলটি inner() ফাংশনের লেক্সিক্যাল স্কোপে ডিক্লেয়ার হয়
     console.log(x + y); // inner() ফাংশনের লেক্সিক্যাল স্কোপ থেকে x এর মান এক্সেস করা হয়
   }
   
   inner();
 }
 
 outer();
 function outer() {
   var x = 10; // x ভ্যারিয়েবলটি outer() ফাংশনের লেক্সিক্যাল স্কোপে ডিক্লেয়ার হয়
   
   function inner() {
     var y = 5; // y ভ্যারিয়েবলটি inner() ফাংশনের লেক্সিক্যাল স্কোপে ডিক্লেয়ার হয়
     console.log(x + y); // inner() ফাংশনের লেক্সিক্যাল স্কোপ থেকে x এর মান এক্সেস করা হয়
   }
   
   inner();
 }
 
 outer();
 