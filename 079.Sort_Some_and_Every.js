var arr=[1,2,3,4,-7,2,20,6,4]
arr.sort()
console.log(arr)
// hm nayeem method
arr.sort((a,b)=>{
    if(a>b){
        return 1
    }else if(a<b){
        return -1
    }else{
        return 0
    }
})
console.log("It's Right Method: "+arr)

//some()
// অ্যারের কোন সংখ্যা যেটি 3 এর সমান বা বড়, সেটি খুঁজে পেতে
const hasNumber = numbers.some((number) =>{
   return number >= 3;
 });
 // every
 console.log(hasNumber); // true (যেকোনো সংখ্যা 3 এর সমান বা বড়)
 // method-4 every 
const numbers = [1, 2, 3,4, 5, 6, 7, 8, 9, 10];
const all=numbers.every((a)=>{
   // অ্যারের সমস্ত সংখ্যা যাদের 2 দ্বারা বিভাজ্য, তা পরীক্ষা করতে
   return a%2===0
})

console.log(all); //// false (সমস্ত সংখ্যা 2 দ্বারা বিভাজ্য নয় )