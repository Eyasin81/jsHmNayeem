

class myClass{
   constructor(name,age){
      this.name=name
      this.age=age
   }
  // class propertice  method
name1="eyasin"
name2=function(){
   console.log("..hello");
}
   print(){
      console.log(`${this.name} ${this.age}`); 
   }
}
let it=new myClass("eyasin","24")
it.print()
