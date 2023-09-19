var myArray=[
    [70,71,72],
    [80,81,82],
    [90,91,92]
]
// console.log(myArry[2])
// console.log(myArry[0][2])
// console.log(myArry[1][1])
for(var i=0;i<myArray.length;i++){
    for(var j=0;j<myArray[i].length;j++){
        console.log("Element "+i+" "+myArray[i][j])
    }
}
for(var i=0;i<myArray.length;i++){
   for(let j=0;j<myArray[i].length;j++){
 console.log("Element "+i+" "+myArray[i][j]);
   }
 }
 // Element 0 70
 // Element 0 71
 // Element 0 72
 // Element 1 80
 // Element 1 81
 // Element 1 82
 // Element 2 90
 // Element 2 91
 // Element 2 92