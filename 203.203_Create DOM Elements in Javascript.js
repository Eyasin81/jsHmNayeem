// Method-1
/* 
let li=document.createElement('li')
li.className="list-group-item"
li.setAttribute('title',"I am four")
// console.log(li)
li.innerHTML='Four'
let list=document.getElementById('list')
list.appendChild(li) 
*/
// Method-2
/* 
let li=createElement('li',"Four", "list-group-item")
li.setAttribute('title',"I am Fourth Item")
list.appendChild(li)
function createElement(tagName,innerHTML,className){
   let tag=document.createElement(tagName)
   tag.innerHTML=innerHTML
   tag.className=className|| ''
   return tag
} 

*/
// Method-3

let li=createElement('li', "list-group-item","Four")
li.setAttribute('title',"I am Fourth Item")
list.appendChild(li)
// function createElement(tagName,className,innerHTML){
//    let tag=document.createElement(tagName)
//    tag.innerHTML=innerHTML||''
//    tag.className=className|| ''
//    return tag
// } 
let p1=createElement('p','lead','Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et tempore voluptas dolor dicta officiis consequuntur, facere quibusdam quo quisquam?')
let p2=createElement('p','lead','Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et tempore voluptas dolor dicta officiis consequuntur, facere quibusdam quo quisquam?')

let div=createElement('div')
append(div,[p1,p2])
let container=document.getElementById('cont')
container.appendChild(div)
function createElement(tagName,className,innerHTML){
   let tag=document.createElement(tagName)
   tag.innerHTML=innerHTML||''
   tag.className=className||''
   return tag
}
function append(parent,children){
   children.forEach(child=>parent.appendChild(child))
}
