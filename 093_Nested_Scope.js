function outer() {
   var x = 10; // outer স্কোপের ভ্যারিয়েবল
 
   function inner() {
     var y = 5; // inner স্কোপের ভ্যারিয়েবল
     console.log(x + y); // inner স্কোপের ভ্যারিয়েবল y এবং outer স্কোপের ভ্যারিয়েবল x এর যোগফল
   }
 
   inner(); // inner ফাংশন কল
 }
 
 outer(); // outer ফাংশন কল
 