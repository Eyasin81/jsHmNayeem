let listItem=document.getElementsByTagName('li')
// Array Convert Method-1
// let lisItems=Array.from(listItem)
// Array Convert Method-2
// let lisItems=Array.prototype.slice.apply(listItem)
// Array Convert Method-3 
let lisItems=[...listItem]

lisItems.forEach((li,ind) => {
   let text=li.innerHTML;
   li.innerHTML=`(${ind+1}) ${text}`
});