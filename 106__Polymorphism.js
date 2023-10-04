class Animal {
   constructor(name) {
     this.name = name;
   }
 
   makeSound() {
     console.log("সাধারণ প্রাণীর শব্দ");
   }
 }
 
 class Dog extends Animal {
   constructor(name, breed) {
     super(name);
     this.breed = breed;
   }
 
   makeSound() {
     console.log("ভওফ! ভওফ!");
   }
 }
 
 class Cat extends Animal {
   constructor(name, color) {
     super(name);
     this.color = color;
   }
 
   makeSound() {
     console.log("মিউ! মিউ!");
   }
 }
 
 // পলিমর্ফিজম এর উদাহরণ
 function animalMakeSound(animal) {
   animal.makeSound();
 }
 
 const myDog = new Dog("বাড়ী", "গোল্ডেন রিট্রিভার");
 const myCat = new Cat("কিটি", "কালো");
 
 animalMakeSound(myDog); // ভওফ! ভওফ!
 animalMakeSound(myCat); // মিউ! মিউ!
 