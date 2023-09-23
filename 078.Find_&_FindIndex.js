var arr=[1,2,3,4,5,6,7,]
//Find Method
var all=arr.find((a)=>{
    return a==9
})
console.log("find Number is"+all)
// FindOfIndex Method
var all1=arr.findIndex((value)=>{
        return value==7
})
console.log("FindOf Index: "+all1)