let p=new Promise(function(resolve,reject){
   let result=false;
   if(result){
      resolve(" I am from Resolve")
   }else{
      reject("I am from Reject")
   }
})
p.then((v)=>{
   console.log(v)
}).catch((v)=>{
   console.log(v)
})