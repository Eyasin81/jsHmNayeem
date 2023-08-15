let mySet=new Set()
mySet.add("e")
mySet.add("y")
mySet.add("a")
mySet.add("S")
console.log(mySet);
console.log("MySet Size is "+mySet.size);

console.log();
// Adding elements to the Set
// সেটে উপাদান যোগ করা হচ্ছে
mySet.delete("y")
console.log(mySet);
console.log(mySet.has("e"));
console.log(mySet.clear());
console.log(mySet.values());
//Rule-1: delete()  ব্যবহার করে কোন একটা key Delete করে দেওয়া ।
// myLet.delete("India")
// console.log(myLet)
// Checking the size of the Set
//Rule-2: size()  ব্যবহার করে কতগুলো  value আছে তা  বাহির  করা ।
// console.log(myLet.size) 
//Rule:-3 clear()  ব্যবহার করে সব value  মুঁছে দিবে । 
// myLet.clear()  
// console.log(myLet)
//Rule-4: has()  ব্যবহার করে value  আছে কি না তা চেক করা ।;
// if(myLet.has("India")){
//     console.log("Yes! Values is here")
// }else(
//     console.log("NO! Values is not Here")
// )
//Rule-5: values()  ব্যবহার করে সব   value  পাওয়া যাবে ।;
// console.log(myLet.values())
