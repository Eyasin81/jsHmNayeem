class OurClass{
   constructor(name,age){
      this.name=name
      this.age=age
   }
   draw(){
      console.log(`My Name is ${this.name} & I am ${this.age} Old`)
   }
 }
 const FullName=new OurClass("Eyasin","23")
 console.log(FullName.age)
 console.log(FullName.name)
 FullName.draw()