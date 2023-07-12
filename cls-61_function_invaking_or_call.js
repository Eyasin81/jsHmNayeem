// function fname1(){
//     console.log("Hello Bangladesh")
// }
// // function call/invoking 
// fname1()

// function fname2(){
// var a=10;
// var b=20
// console.log(a+b)
// }
// fname2()
var arr1=[1,2,3]
var arr2=[4,5,6]
var arr3=[7,8,9]
function sumOfArr(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    console.log(sum)
}
//
sumOfArr(arr1)
sumOfArr(arr2)
sumOfArr(arr3)