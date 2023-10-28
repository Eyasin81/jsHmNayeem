// 191 videos 

// first method 
/* function myPromise (){
   return Promise.resolve("test value")
}
console.log(myPromise()) // eita Promise return korbe */

// promise async  Method-2
/* async function text(){

}
console.log(text()) */ // return promise korbe
// let p1=Promise.resolve("I am a Promise")
// async function text(){
// // p1.then(v=>{
// //    // console.log(v)
 
// // })
// let v=await p1  
// console.log(v)

// }
// text()
// fetch api


/* async function text() {
   try{
      let res=await fetch("link");
      let data=await res.json();
      let names=data.map(u=>{
         console.log(names)
      })
   }catch(e){
      console.log(e.message)
   }

  }
  text() */
  let promise=[Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)]
  async function promiseAll(){
   let result=await Promise.all(promise)
   console.log(result)
  }
  promiseAll()
