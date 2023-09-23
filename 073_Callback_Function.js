function sample(a,b){
    var c=a+b
    var d=a-b 
    var result=sum(c,d)
    return result
}
function sum(a,b){
    return a+b
}
console.log(sample(5,8))

// callback Function
function a(callback){
    console.log("hello Programmer 1");
    callback()
  }
  function b(){
    console.log("hello Programmer 2");
  }
  a(b)