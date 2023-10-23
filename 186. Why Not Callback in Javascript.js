let arr=[1,2,3]
let sqrArr=arr.map(v=>v*v) 
console.log(sqrArr)

function asyncMap(arr,cb){
   return arr.map(v=>{
      setTimeout(()=>{
         cb(v)
      })
   })
}
let qbArr=async(arr,v=>{
   console.log(v)
})
console.log(qbArr)