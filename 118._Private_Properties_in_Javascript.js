class MyClass {
   // প্রাইভেট প্রপার্টি ঘোষণা
   #privateProperty;
 
   constructor() {
     // প্রাইভেট প্রপার্টি ইনিশিয়ালাইজ করা
     this.#privateProperty = 42;
   }
 
   // প্রাইভেট প্রপার্টি এক্সেস করার মেথড
   getPrivateProperty() {
     return this.#privateProperty;
   }
 
   // প্রাইভেট প্রপার্টি এডিট করার মেথড
   setPrivateProperty(newValue) {
     this.#privateProperty = newValue;
   }
 }
 
 const myObject = new MyClass();
 
 // প্রাইভেট প্রপার্টি এক্সেস করা
 console.log(myObject.getPrivateProperty()); // 42
 
 // প্রাইভেট প্রপার্টি এডিট করা
 myObject.setPrivateProperty(100);
 
 // প্রাইভেট প্রপার্টি এক্সেস করা (এবার মৌলিক মান পরিবর্তিত হয়েছে)
 console.log(myObject.getPrivateProperty()); // 100
 