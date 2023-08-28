// let li=document.createElement('li')
// // console.log(li);
// li.className="list-group-item"
// li.setAttribute('title',"I love you")
// console.log(li);
// // li.innerHTML()
// let list=document.getElementById('list')
// list.appendChild(li)
/* let li=createElement('li','Four','list-item-group');
li.setAttribute('title', 'I am a Forth Item')
let list=document.getElementById('list')
list.append(li)
function createElement(tagName,innerHTML,className){
let tag=document.createElement(tagName)
tag.innerHTML=innerHTML
tag.className=className || ''
return tag
} */

/// new method start
let p1=createElement('p','lead','Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde similique itaque ratione voluptatum illo libero obcaecati modi! Ipsa sapiente maiores earum nemo sed voluptatum ipsum illo minus, provident quos explicabo assumenda nisi eaque fuga. Exercitationem sit corrupti tempora. Magnam ex molestiae adipisci fugiat tempore voluptatem, nemo deleniti consequatur necessitatibus aperiam aliquam, doloremque cumque unde dolores rem ')

let p2=createElement('p','lead','Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi unde similique itaque ratione voluptatum illo libero obcaecati modi! Ipsa sapiente maiores earum nemo sed voluptatum ipsum illo minus, provident quos explicabo assumenda nisi eaque fuga. Exercitationem sit corrupti tempora. Magnam ex molestiae adipisci fugiat tempore voluptatem, nemo deleniti consequatur necessitatibus aperiam aliquam, doloremque cumque unde dolores rem ')

let div=createElement('div')
append(div,[p1,p2])

let container=document.getElementById('cont')
container.appendChild(div)

// new method End

let li=createElement('li','Four','list-item-group');
li.setAttribute('title', 'I am a Forth Item')
let list=document.getElementById('list')
list.append(li)
function createElement(tagName,className,innerHTML,){
let tag=document.createElement(tagName)
tag.innerHTML=innerHTML || ''
tag.className=className || ''
return tag
}
// new line add start
function append(parent,children){
children.forEach(child=>{
   parent.appendChild(child)
})
}
// end 