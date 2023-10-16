// একটি প্যারেন্ট ক্লাস (অথবা অবজেক্ট) ডিফাইন করা
function Parent(name) {
   this.name = name;
 }
 
 // প্যারেন্ট ক্লাসের প্রোটোটাইপে মেথড যোগ করা
 Parent.prototype.greet = function() {
   console.log(`Hello, my name is ${this.name}`);
 };
 
 // একটি চাইল্ড ক্লাস ডিফাইন করা, যা প্যারেন্ট ক্লাস থেকে ইনহেরিট করে
 function Child(name, age) {
   // প্যারেন্ট ক্লাসের কনস্ট্রাক্টর কল করা
   Parent.call(this, name);
   this.age = age;
 }
 
 // চাইল্ড ক্লাসের প্রোটোটাইপ প্যারেন্ট ক্লাসের প্রোটোটাইপ থেকে ইনহেরিট করা
 Child.prototype = Object.create(Parent.prototype);
 
 // চাইল্ড ক্লাসের প্রোটোটাইপে নতুন মেথড যোগ করা
 Child.prototype.introduce = function() {
   console.log(`My name is ${this.name}, and I am ${this.age} years old.`);
 };
 
 // চাইল্ড ক্লাসের অবজেক্ট তৈরি করা
 const child = new Child('Alice', 5);
 
 // মেথড কল করা
 child.greet();       // প্যারেন্ট ক্লাসের মেথড
 child.introduce();   // চাইল্ড ক্লাসের মেথড
 