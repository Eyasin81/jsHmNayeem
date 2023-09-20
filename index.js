// function test(){

//   for(var i=0;i<arguments.length;i++){
//       console.log(arguments[i])
//   }
// }
// test(1,2,3,)
function text(){
  sum=0
  for(let i=0;i<arguments.length;i++){
    // console.log(arguments[i]);
    sum+=arguments[i]
  }
  console.log(sum);
}
text(1,2,3)