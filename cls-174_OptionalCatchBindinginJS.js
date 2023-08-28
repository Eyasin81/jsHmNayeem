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
   console.log("I am a line 2");
   throw new CustomError("I am Your Custom Error ")
}catch(e){
   console.dir(e.message);
}finally{
   console.log("I am Finally Block");
}
