// Async Method 
function SayName(name){
   setTimeout(()=>{
      console.log(name)
   },4000)

} 
let result=SayName("MD. Eyasin ALI")
console.log(result)// 1st time call undefined 
// four second after call Md. Eayasin ALi
