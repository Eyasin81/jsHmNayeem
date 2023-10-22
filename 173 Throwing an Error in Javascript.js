try{
   console.log("I am Your Line 1")
   // error add
   throw new Error("I am Your Error")
   console.log("I am Your Line 2")
   }catch(e){
      console.log(e.message)
   }
   