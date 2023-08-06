var  Rectangle=function(width,height){
   var position={
      x:56,
      y:100
   }
   this.width
   this.height
   var PrintProPerties=function(){
      console.log(`My Width is `+this.width);
      console.log(`My height is `+this.height);
   }.bind(this)
   this.draw=function(){
      console.log("I am a Rectangle ");
      PrintProPerties()
      console.log(`Position x =`+position.x+`Position y =`+position.y);
   }
   }
   var rec7=new Rectangle(45,46)
   rec7.draw()