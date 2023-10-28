/* function delay(ms){
   return new Promise(resolve=>{
      setTimeout(resolve,ms)
   })
}
console.log("Working Start")
delay(1000)
.then(e=>{
   console.log("Hello I am from Working ")
})
 */
/* const delay=s=>new Promise(resolve=>{
setTimeout(resolve,s*1000)
})
delay(5).then(()=>{console.log(`5 Second Delay`)})
delay(2).then(()=>{console.log(`2 Second Delay`)})
delay(1).then(()=>{console.log(`1 Second Delay`)})
delay(3).then(()=>{console.log(`3 Second Delay`)}) */
/* Promise */
/* let p100=Promise.resolve('Test')
p100.then(v=>{
   console.log(v)
})
let p1001=Promise.reject('Reject')
p1001.catch(v=>{
   console.log(v)
})
 */
// Multiple Promise Call
/* 
let p1=Promise.resolve("one")
let p2=Promise.resolve("Two")
let p3=Promise.resolve("Three")
let all=[p1,p2,p3]
Promise.all(all) 
.then(arr=>{
   console.log(arr)
}) */
let p1=new Promise(resolve=>{
   setTimeout(resolve,3000,"one")
})
let p21=new Promise(resolve=>{
   setTimeout(resolve,1000,"Two")
})
let p211=new Promise(resolve=>{
   setTimeout(resolve,4000,"Two")
})
let allMyArray=[p1,p21,p211]
Promise.all(allMyArray)
.then(allArray=>{
   console.log(allArray)
})
// Promise.race এই মেথডের মাধ্যমে প্রথমে যেটা আউটপুট দেখাবে পরে  বাকি গুলো ব্লক করে দিবে । 

Promise.race(allMyArray)
.then(v=>{
   console.log(v)
})