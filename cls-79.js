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