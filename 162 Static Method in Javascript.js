// Hm Nayem Videos Method-1
class Person{
   constructor(name,email){
      this.name=name
      this.email=email
   }
   print(){
      console.log(this.name, this.email);
   }
   static creator(str){
      let person=JSON.parse(str)
      return new Person(person.name, person.email)
   }
   }
   let str='{"name":"eyasi"email":"eyasina81@gmail.com"}'
   let p1=Person.creator(str)
   // console.log(p1);
   
   // Rabbil Hasan Vidos mathod
   class myClass{
      static hello(){
         console.log("hello programmer");
      }
   }
   /* let s1=new myClass() static keyword এর জন্য new myClass()নামে কিওয়াড কল করা লাগবে না
   s1.hello() */
   // myClass.hello()
   // W3Shool Refernce
   class Car {
      constructor(name) {
        this.name = name;
      }
      static hello() {
        return "Hello!!";
      }
    }
   // Car.hello()
   class MyClass {
      static staticMethod() {
        console.log("This is a static method.");
      }
    }
    
   //  MyClass.staticMethod(); // Calling the static method
   class MyClass {
      static staticProperty = "This is a static property.";
    }
    
   //  console.log(MyClass.staticProperty); // Accessing the static property
    