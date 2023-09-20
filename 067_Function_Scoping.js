// function scope
var a="abc"
function text(){
    // var a=10
    function text1(){
        // var a=20;
        console.log(a)
    }
    text1()
}
text()