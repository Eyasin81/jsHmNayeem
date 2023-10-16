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

/* 

function Person(name) {
  this.name = name; // ইনস্ট্যান্স প্রপার্টি
}

Person.prototype.greet = function() {
  console.log(`হ্যালো, আমার নাম ${this.name}।`); // প্রোটোটাইপ মেথড
};

var person1 = new Person("আলিস");
var person2 = new Person("বব");

person1.greet(); // আউটপুট: "হ্যালো, আমার নাম আলিস।"
person2.greet(); // আউটপুট: "হ্যালো, আমার নাম বব।"


*/
