var a=100;
var b=20;
var c=300;
var d=40;
// and operator
if(a>b&&c>d){
    console.log("A grather than B and C grathr than D")
}else{
    console.log("One or Two Condition is False")
}
// OR OPERATOR 
if(a>b||c>d){
    console.log("a grater than b or c grater than d")
}else{
    console.log("two condition is false")
}
// NOT OPERATOR
var check=!(a<b);
console.log(check)