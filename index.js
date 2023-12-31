let postForm=document.getElementById('post-from')
let posts=document.getElementById('post')
let URL="https://jsonplaceholder.typicode.com/posts";
postForm.addEventListener('submit',function(e){
   e.preventDefault()
   let title=this.title.value|| undefined
   let body=this.body.value|| undefined
   if(title && body){
      let postObj={
         userId:100,
         title,
         body
      }
      fetch(URL,{
         method:"POST",
         headers:{
            'Content-type':"Application/JSON"
         },
         body:JSON.stringify(postObj)
      })
      .then(res=>res.json())
      .then(data=>{

         let item=listItemGenerator(data)
         posts.appendChild(item) 
         this.reset() 


         
      })
      .catch(e=>{
         console.log(e.message)
      })
   }else{
      alert("Please Provide Every details")
   }

})


function listItemGenerator(item){
   let li=document.createElement('li')
   li.className='list-group-item'
   li.innerHTML=` ${item.id} ${item.title} By User id ${item.userId}`
   return li
}





/* function listItemGenerator(item,no){
   let li=document.createElement('li')
   li.className='list-group-item'
   li.innerHTML=`${no} ${item.title}`
   return li
}
 */