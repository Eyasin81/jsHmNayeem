let _name=new WeakMap()
let _radius=new WeakMap()
let _resize=new WeakMap()
class Circle{
   constructor(radius,name){
      this.size=200
      _radius.set(this,radius)
      _name.set(this, name)
      //function
      _resize.set(this,()=>{
         console.log(this.size);
      })
   }
   draw(){
      console.log("this is a Draw");
      // access privet prototype with WeakMap()

     console.log(_radius.get(this),_name.get(this));
      _resize.get(this)()
   }
}
let c1=new Circle("2","Rectangle")
c1.draw()