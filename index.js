class MyClass{
   constructor(name,age){
      this.name=name
      this.age=age
   }
   name1=function(){
      console.log(`I am a ${this.name} and I am ${this.age} Old`)
   }
   static obj(str){
     let person= JSON.parse(str) 
      return new MyClass(`I am ${person.name} I am ${person.age}`)
   }
}
let str={"name":"Eyasin Ali","age":"24"}
let myCl
ck=MyClass.obj(str)
console.log(myClick)
/* 

let p1=Person.creator(str)

*/


/* 

static creator(str){
   let person=JSON.parse(str)
   return new Person(person.name, person.email)
}
*/