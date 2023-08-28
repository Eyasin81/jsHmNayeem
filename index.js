
let p =new Promise(function(resolve,reject){
   let workDone=true; // some time consuming work
   if(workDone){
   //invoke resolve function passed
   resolve('success promise completed')
   }
   else{
   reject('ERROR , work could not be completed')
   }
  })
 .then((v)=>{
   console.log(v);
 })
