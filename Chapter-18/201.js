let list=document.getElementsByTagName('li')
// console.log(list);
// first method

// let listItem=Array.from(list)
//second method
// let listItem=Array.prototype.slice.apply(list)

// third method
let listItem=[...list]
listItem.forEach((li,ind)=>{
   let txt=li.innerHTML 
   li.innerHTML=`(${ind+1}) ${txt})`
})