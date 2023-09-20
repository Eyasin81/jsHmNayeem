// Define a Function 
function fname(){
   console.log("I am Function");
 }
 // function call/invoking
 
 fname()//I am Function
 
 // Define anotherFunction 
 function sub(){
   let a=50;
   let b=20;
   console.log(a-b);
 }
 
 // function call/invoking 
 sub()// 30
 
 let arr1=[1,2,3]
 let arr2=[4,5,6]
 let arr3=[7,8,9]
 // All number Additional
 function sumOfArr(arr){
   let sum=0;
   for(let i=0;i<arr.length;i++){
     sum+=arr[i]
   }
   console.log(sum);
 }
 sumOfArr(arr1)//6
 sumOfArr(arr2)///15
 sumOfArr(arr3)///24
 
 