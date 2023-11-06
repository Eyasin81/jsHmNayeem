/*  let lastItem=list.lastElementChild.cloneNode(true)
true= সবগুলো কপি হয়ে যাবে । 

*/
let lastItem=list.lastElementChild.cloneNode(true)
lastItem.innerHTML="Four"
list.appendChild(lastItem)