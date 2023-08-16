
//delete(values)
//set.size(values)
// clear(values)
// has(values)
//values()
// for loop
var mySet=new Set();
mySet.add("Bangladesh");
mySet.add("India");
mySet.add("USA");
mySet.add("Canada");
mySet.add("Africa");
mySet.add("Bangladesh");
//Rule-1: delete()  ব্যবহার করে কোন একটা key Delete করে দেওয়া ।
// mySet.delete("India")
// console.log(mySet)
//Rule-2: size()  ব্যবহার করে কতগুলো  value বাহির  করা ।
// console.log(mySet.size) 
//Rule:-3 clear()  ব্যবহার করে সেব  মুঁছে দিবে । 
// mySet.clear()  
// console.log(mySet)
//Rule-4: has()  ব্যবহার করে value  আছে কি না তা চেক করা ।;
// if(mySet.has("India")){
//     console.log("Yes! Values is here")
// }else(
//     console.log("NO! Values is not Here")
// )
//Rule-5: values()  ব্যবহার করে সব   value  পাওয়া যাবে ।;
// console.log(mySet.values())
// use for loop output result key
for(let key of mySet){
   console.log(key);
}