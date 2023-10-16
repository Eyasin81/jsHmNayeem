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

 /* 
 // Hm Nayeem
 var  Rectangle=function(width,height){
  
   var position={
      x:56,
      y:100
   }
   this.width
   this.height
   var PrintProPerties=function(){
      console.log(`My Width is `+this.width);
      console.log(`My height is `+this.height);
   }.bind(this)
   this.draw=function(){
      console.log("I am a Rectangle ");
      PrintProPerties()
      console.log(`Position x =`+position.x+`Position y =`+position.y);
   }
   }
   var rec7=new Rectangle(45,46)
   rec7.draw()
   // rec7.PrintProPerties()
   
 
 
 
 
 
 
 
 
 
 
 */
 