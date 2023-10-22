function makeWorld(){
   try{
let str=text.trim()
let words=str.split(" ")
return words
   }catch(e){
      console.log(e)
   }

}
let words=makeWorld(12)
console.log(words)

/* 
try {
   // একটি অবৈধ জাভাস্ক্রিপ্ট কোড যা ত্রুটি সৃষ্টি করতে পারে
   অসম্ভাব্য_ফাংশন(); 
} catch (ত্রুটি_অবস্থা) {
   // ত্রুটি হ্যান্ডল করা হচ্ছে
   console.log("ত্রুটি পাওয়া গিয়েছে: " + ত্রুটি_অবস্থা.message);
}


*/