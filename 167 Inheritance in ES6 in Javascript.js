class parent{
   hello1(){
      console.log("hello this is me");
   }
   hello2(){
      console.log("hello this is me");
   }
   hello3(){
      console.log("hello this is me");
   }
}
class child extends parent{
// parent sob golu ei khane ache
}
let all=new child()
all.hello1() 
/* 

// Class Inheritance
//Method-1
"use strict"
class Shape{
   constructor(name){
      this.name=name
   }
}
class Sqar extends Shape{
   ddd(){
      console.log(`My Name is ${this.name}`)
   }
}
 let e=new Sqar("eyasin ali")
 e.ddd()

*/