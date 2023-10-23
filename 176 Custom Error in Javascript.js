class CustomError extends Error{
   constructor(msg){
      super(msg) 
      if(Error.CaptureStackTrace){
         Error.CaptureStackTrace(this,CustomError)
      }
   }
}
try{
   console.log("I am a line 1");
  
   throw new CustomError("I am Your Custom Error ")
   console.log("I am a line 2");
}catch(e){
   console.log(e);
   // console.log(e.message);
   // console.dir(e.message);
}finally{
   console.log("I am Finally Block");
}
