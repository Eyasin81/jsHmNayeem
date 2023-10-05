var CreateRect=function(width,height){
   return{
      width:width,
      height:height,
      draw:function(){
         console.log("I am a Rectangle")
         this.printProperties()
         console.log(this)
      },
      printProperties:function(){
         console.log("My width is "+ this.width)
         console.log("My height is "+ this.height)
      }
   }
}
var rec1=CreateRect(10,120)
rec1.draw()
var rec2=CreateRect(23,20)
rec2.draw()
var rec3=CreateRect(1,2)
