// ChatGpt Syntax
const myPromise = new Promise((resolve, reject) => {
   // এখানে আপনি কোন আসংক্যাস অথবা একটি আসংক্যাস অথবা কোন অপারেশন সম্পাদন করতে পারেন
   // যদি অপারেশন সফল হয়, তাদের resolve() ফাংশন কল করতে হবে এবং ডেটা পাস করতে হবে
   // যদি অপারেশন ব্যর্থ হয
} )
 

// HM Nayee
/* let p1=new Promise((resolve,reject)=>{
   setTimeout(resolve,5000,"One")
})
let p2=new Promise((resolve,reject)=>{
   setTimeout(resolve,3000,"Two")
})

p1.then((v)=>{
   console.log(v)
})


p2.then((v)=>{
   console.log(v)
}) */

// Method-2
/* function getIphone(isPassed){
   return new Promise((resolve,reject)=>{
   setTimeout(()=>{
      if(isPassed){
         resolve("I got a iphone")
      }else{
         reject("Sorry You are fail")
      }
   },2000)
   })

}
console.log(getIphone(false)) */

function getIphone(isPassed){
   return new Promise((resolve,reject)=>{
   setTimeout(()=>{
      if(isPassed){
         resolve("I got a iphone")
      }else{
         reject(new Error("You are a Fail"))
      }
   },2000)
   })

}
getIphone(false) 
.then((v)=>{
   console.log(v)
})
.catch((v)=>{
   console.log(v.message)
})
