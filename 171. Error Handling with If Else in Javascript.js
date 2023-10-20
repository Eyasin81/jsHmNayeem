//  Our Custom Error
function errorSimple(v){
   let result=Number.parseInt(v)
   if(!result){
      //Method-1 
   //  return ("Please Provide a value which is able to convert in Integer ")
   // Method-2 
     /*  console.log("Please Provide a value which is able to convert in Integer")
      return */
     return ("Please Provide a value which is able to convert in Integer")
     
   }
   return result

}
let result=errorSimple("aa23")
console.log(result)