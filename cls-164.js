let _name=new WeakMap()
let _age=new WeakMap()
let _fun=new WeakMap()
class circle{
   constructor(name,age){
      let zimba=100
      _name.set(this,name)
      _age.set(this,age)
      _fun.set(this,()=>{
         console.log(this,zimba);
      })
   }
   draw(){
      console.log("helo Lololita");
      console.log(_name.get(this),_age.get(this));
      _fun.get(this)()
   }
}
let c1=new circle("Lila","23")
c1.draw()