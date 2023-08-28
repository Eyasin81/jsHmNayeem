const Base_Url="www.jsonplaceholder.typicode.com"
let res=fetch(`&{Base_Url}/users/1`)
console.log(res);
res.then((data)=>{
console.log(data);
})
res.catch((err)=>{
   console.log(err);
})