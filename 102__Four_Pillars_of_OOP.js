// Four Pillars of OOP জাভাস্কিপ্ট এর সিনট্যাক্স কি?
// 1.	এনক্যাপসুলেশন (Encapsulation): 
class Student {
   constructor(name, age) {
     this.name = name; // প্রাইভেট প্রোপার্টি
     this.age = age;   // প্রাইভেট প্রোপার্টি
   }
 
   displayInfo() { // পাবলিক মেথড
     console.log(`Name: ${this.name}, Age: ${this.age}`);
   }
 }
 
 const student1 = new Student('Alice', 20);
 student1.displayInfo(); // 'Name: Alice, Age: 20'
 console.log(student1.name); // এরর, প্রাইভেট প্রোপার্টি
// 2 ইনহেরিটেন্স (Inheritance): 
class Animal {
   constructor(name) {
     this.name = name;
   }
 
   speak() {
     console.log(`${this.name} makes a sound`);
   }
 }
 
 class Dog extends Animal {
   speak() {
     console.log(`${this.name} barks`);
   }
 }
 
 const dog1 = new Dog('Buddy');
 dog1.speak(); // 'Buddy barks'

//3  পলিমরফিজম (Polymorphism):
class Shape {
   area() {
     // মেথড অভ্যন্তরীণ পূর্ববর্তী ক্লাসে অপ্রোজেক্ট নির্দিষ্ট
   }
 }
 
 class Circle extends Shape {
   constructor(radius) {
     super();
     this.radius = radius;
   }
 
   area() {
     return Math.PI * this.radius * this.radius;
   }
 }
 
 class Rectangle extends Shape {
   constructor(width, height) {
     super();
     this.width = width;
     this.height = height;
   }
 
   area() {
     return this.width * this.height;
   }
 }
 
 const circle = new Circle(5);
 const rectangle = new Rectangle(4, 6);
 
 console.log(circle.area());    // বৃত্তের ক্ষেত্রফল
 console.log(rectangle.area()); // রেক্ট্যাঙ্গলের ক্ষেত্রফল
//  এবজেক্ট (Objects):
const person = {
   firstName: 'John',
   lastName: 'Doe',
   sayHello() {
     console.log(`Hello, ${this.firstName} ${this.lastName}`);
   }
 };
 
 console.log(person.firstName); // 'John'
 person.sayHello(); // 'Hello, John Doe'
//  4. Abstraction সিনট্যাক্স

 // একটি অস্থায়ী গাড়ি ক্লাস
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    console.log('Engine started');
  }

  stop() {
    console.log('Engine stopped');
  }
}

// একটি গাড়ি ইনস্ট্যান্স তৈরি করুন
const myCar = new Car('Toyota', 'Camry');

// গাড়ি চালানোর সিনট্যাক্স
myCar.start(); // 'Engine started'

// এই ব্যবহারকারীগণ জানে গাড়ি চালাতে কী করতে হয়, তারা অ্যাবস্ট্র্যাক্টেড ডিটেইলগুলি নয়

 