// Execution_Context
function a(){
    b()
    console.log("Hello Programmer A")
}
function b(){
    d()
    console.log("Hello Programmer B")
}
function c(){
    
    console.log("Hello Programmer C")
}
function d(){
    c()
    console.log("Hello Programmer D")
}
function e(){
    
    console.log("Hello Programmer E")
}
var x=100
a()
console.log("I am a Global Function")