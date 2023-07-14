// recursive 
function sayHi(n) {
    if(n==0){
        return
    }
    console.log("hello Programmer")
    sayHi(n-1)
  }
  sayHi(10)