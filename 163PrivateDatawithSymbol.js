let _radius=Symbol()
let _name=Symbol()
class Circle{
   constructor(radius,name){
      // hide _radius,_name 
      this[_radius]=radius
      this[_name]=name
   }
   draw(){
      console.log("this is a draw");
   }
}
let c1=new Circle(3,"CRUD")
// c1.draw()
// console.log(Object.getOwnPropertyDescriptor(c1));
// console.log(Object.getOwnPropertySymbols(c1));//[Symbol()]
// console.log(Object.getOwnPropertySymbols(c1)[0]);// Output ==>Symbol()

//access newar first method
console.log(c1[_radius]);
console.log(c1[_name]);

// Hide Property access  2nd method
// let key=(Object.getOwnPropertySymbols(c1)[0]);//
// console.log(c1[key]); //3