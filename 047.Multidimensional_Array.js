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