for (var i = 0; i < 3; i++) {
   // ক্লোজার ফাংশন ডিফাইন করা হয়
   (function (index) {
     setTimeout(function () {
       console.log(index);
     }, 1000);
   })(i); // ফাংশনটি সত্যিকারে কল করা হয়, এবং i এর মান প্যারামিটার হিসেবে পাঠানো হয়
 }
 