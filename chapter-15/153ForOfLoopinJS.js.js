// Array উপর For of Loop প্রয়োগের মাধ্যমে  Array এর প্রত্যেকটি বাহির কারা ।
let myArray=[1,2,3,4,5,6,7,]
for(let v in myArray){
   console.log(v);
} 
// String উপর For of Loop প্রয়োগের মাধ্যমে  String এর প্রত্যেকটি বাহির কারা ।
// Loop in String Method-1
let myStr="EyasinAli"
for (let v of myStr ){
console.log(v);
}

console.log("Line Brack");
// Loop in String Method-2
for(let i=0;i<myStr.length;i++){
   console.log(myStr[i]);
}
