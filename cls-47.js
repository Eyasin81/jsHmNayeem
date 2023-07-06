var myArry=[
    [70,71,72],
    [80,81,82],
    [90,91,92]
]
// console.log(myArry[2])
// console.log(myArry[0][2])
// console.log(myArry[1][1])
for(var i=0;i<myArry.length;i++){
    for(var j=0;j<myArry[i].length;j++){
        console.log("Element "+i+" "+myArry[i][j])
    }
}