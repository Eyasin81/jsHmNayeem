//function
function function_name(){
    console.log("Hello Internet")
}
function_name()
// return Function
function function_name1(){
    return("Hello Internet")
}
// var val=function_name()
// console.log(val)
///function parameter
function test1(n1,n2){
    var val=n1+n2
    console.log(val)
}
test1(10,20)
//default function
function add(a,b=1){
    console.log(a+b)
}
// add(6)
// reset function
function fun1(...parm){
    console.log(parm.length)
}
fun1()
fun1(1,2)
fun1(1,2,3)
fun1(1,2,3,4)
