function a(callback){
  console.log("hello Programmer 1");
  callback()
}
function b(){
  console.log("hello Programmer 2");
}
a(b)