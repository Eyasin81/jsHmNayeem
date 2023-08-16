let myMap=new Map()
myMap.set("key1","Bangladesh")
myMap.set("key2","India")
myMap.set("key3","China")
/* console.log(myMap);

// One value output
console.log(myMap.get("key1"));
// has 
console.log(myMap.has("key3"));
console.log(myMap.delete("key3"));
console.log(myMap);
console.log(myMap.keys());
console.log(myMap.values());
// console.log(myMap.clear());
// console.log(myMap);
console.log(myMap.size);
for (let [key,value] of myMap){
   console.log(key);
   console.log(value);
} */
// console.log(myMap);
myMap.forEach(function(){
   console.log("key");
})