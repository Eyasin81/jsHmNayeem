//delete()
// get()
// clear()
// has()
var myMap=new Map();
// key pair Value Add
myMap.set("key1","bangladesh");
myMap.set("key2","India");
myMap.set("key3","Pakistan");
// console.log(myMap);
//Rule-1: delete()  ব্যবহার করে কোন একটা key delete করে দেওয়া ।
// myMap.delete("key1");
// console.log(myMap)
console.log(myMap.delete('key2'));
console.log(myMap);


//Rule-2: get()  ব্যবহার করে কোন একটা key বাহির  করা ।
console.log(myMap.get("key3"))
//Rule-3: clear()  ব্যবহার করে সেব  key মুঁছে মুঁছে দিবে ।
// myMap.clear()
// console.log(myMap)
// console.log(myMap.clear());
console.log(myMap.has("key1"));
console.log(myMap);
//Rule-4: has()  ব্যবহার করে value  আছে কি না তা চেক করা ।;
// if(myMap.has("key1")){
//     console.log("Yes! Key is here")
// }else(
//     console.log("NO! Key is not Here")
// )
for(let [k,v] of myMap){
   console.log(k);// output key1 kye2 key3
   console.log(v);
}/// output bangladesh India Pakistan