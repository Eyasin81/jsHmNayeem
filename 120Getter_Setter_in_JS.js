// একজন User কে কিছূ ডাটা  দেওয়া আর কিছূ ডাটা Hide করার জন্য Absturction ব্যবহার করা হয় ।



var  Rectangle=function(width,height){
   /* PriverPropertics */
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
   // PrivetPropertics method 1
   // this.getPosition=function () {
   //    return position
   //   }
   this.draw=function(){
      console.log("I am a Rectangle ");
      PrintProPerties()
      console.log(`Position x =`+position.x+`Position y =`+position.y);
   }
// Method 2

Object.defineProperty(this,'position',{
   get:function(){
      return position
   },
   set:function(value){
      position=value
   }
})
   }
   var rec7=new Rectangle(45,46)
   // rec7.draw()
   // Privetpropertics Access method-1
   // console.log(rec7.getPosition());
   // Method-2
   rec7.position={
      x:456,
      y:-123
   } 
   console.log(rec7.position);


   //Getter
   /* 
   
   
   
   
   class MyClass {
  constructor() {
    this._value = 0; // প্রাইভেট প্রপার্টি
  }

  get value() {
    return this._value; // Getter মেথড
  }
}

const myObject = new MyClass();
console.log(myObject.value); // প্রপার্টির মান দেখানো

   */
//Setter
// class MyClass {
//    constructor() {
//      this._value = 0; // প্রাইভেট প্রপার্টি
//    }
 
//    get value() {
//      return this._value; // Getter মেথড
//    }
 
//    set value(newValue) {
//      if (newValue >= 0) {
//        this._value = newValue; // Setter মেথড
//      } else {
//        console.log("মান অমান্য");
//      }
//    }
//  }
 
//  const myObject = new MyClass();
//  myObject.value = 42; // Setter মেথড কল করে মান সেট করা
//  console.log(myObject.value); // 42
 
//  myObject.value = -10; // Setter মেথড কল করে মান সেট করা (অমান্য মান)
