//Remove element and Update
let firstChild=list.firstElementChild 
let last=list.lastChild
console.log(last)
// console.log(firstChild)
// Update
setTimeout(()=>{
firstChild.innerHTML=firstChild.innerHTML+'(Modifiy)'
},5000)
// Remove
setTimeout(()=>{
   list.lastChild.remove()
   },3000)