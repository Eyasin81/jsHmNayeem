// function test(){
//    // console.log(this);
//    console.log(this.a+this.b);
// }
// // method 1
// // test()
// // test.call({})
// // Method-2
// // test()
// test.call({a:20,b:10})
// Method-3
function test(c,d/* argument */){

   console.log(this.a+this.b+c+d);
}
/// Call Method
// test.call({a:20,b:10},2,3)
// Apply Method
// test.apply({a:20,b:10},[3,2])
// Bind Method one
// testBind=test.bind({a:2,b:3},2,3)
// testBind()
// Bind Method Two
testBind=test.bind({a:2,b:3})
testBind(2,3)