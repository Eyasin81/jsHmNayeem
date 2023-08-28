/* let p1=new Promise((resolve,reject)=>{

   setTimeout(resolve,5000,"one")
   })
   let p2=new Promise((resolve,reject)=>{
      setTimeout(resolve,3000,"two")
      })
   
      p1.then((V)=>{
         console.log(V);
      }) .catch((c)=>{
         console.log(c);
      })
      
       p2.then((V)=>{
         console.log(V);
      }).catch((c)=>{
         console.log(c);
      }) */
       
function getIphone(isPassed){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         if(isPassed){
            resolve("I have passed & You Win iPhone");
         }else{
            reject(new Error("You have Fail"))
         }
      },3000)
   })
}
// console.log(getIphone(true));
getIphone(false)
.then((res)=>{
   console.log(res);
}).catch((e)=>{
   console.log(e.message);
})