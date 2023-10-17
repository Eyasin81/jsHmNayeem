/* 
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
} */

// একটি সেট তৈরি করা
const mySet = new Set();

// সেটে মান যোগ করা
mySet.add(1);
mySet.add(2);
mySet.add(3);

// সেট থেকে মান সরানো
mySet.delete(2);

// সেটে একটি মান আছে কিনা পরীক্ষা করা
console.log(mySet.has(1)); // আউটপুট: true
console.log(mySet.has(9)); // আউটপুট: false

// সেটে মানগুলির সংখ্যা পেতে
console.log(mySet.size); // আউটপুট: 2

// সেটে সব মানগুলি পেতে
mySet.forEach(value => {
  console.log(value);
});

// সেট থেকে মান সব মান মুছে দেওয়া
mySet.clear();
