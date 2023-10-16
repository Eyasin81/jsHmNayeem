// instance member 
function Square(width){
   this.width=width
   this.getWidth=function(){
      console.log(`Width is `+ this.width)
      // this.draw()
   }
}

Square.prototype={
   draw:function(){
      this.getWidth()
      console.log(`Draw`)
   },
   toString:function(){
      return `My Width is =`+ this.width
   }
}
var sqr1=new Square(10)
var sqr2=new Square(5) 
sqr1.draw()
// Method-1
// নিজ্বস প্রোপারটি কিনা তা চেক করবে । 
console.log(Object.keys(sqr1))// width,height

// Method-2
//Object Instance এর নিজস্ব প্রোপারটি কিনা ত া চেক করবে ।  
console.log(sqr1.hasOwnProperty("width"))
//true

console.log(sqr1.hasOwnProperty("getWidth"))// true
console.log(sqr1.hasOwnProperty('draw'))// False
  

// Method-3
// Object Instance property ও প্রোটোটাইপ মেথড এর মেম্বার পেতে চাই তবে এই



for (let i in sqr1){
   console.log(i)
}
/* 

width
getWidth
 draw 
 toString

*/

// মেথড ব্যবহার করতে হবে ।
