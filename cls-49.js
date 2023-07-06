// var myArray=[1,2,3]
// // console.log(myArray.join(" "))
// // console.log(myArray.fill(0))
// var myArray1=Array.from(myArray)
// console.log(myArray)
//refarnce array
var a=[1,2]
// var b=a;
// b[0]=5;
// console.log(b)
//why using form
var b=Array.from(a)
b[0]=10;
console.log(a)
console.log(b)