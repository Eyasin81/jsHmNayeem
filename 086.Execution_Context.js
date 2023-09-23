// 
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
///////////////////////////////////////////
// গ্লোবাল স্কোপের এক্সিকিউশন কনটেক্স্ট
var globalVariable = 'I am a global variable';

function outerFunction(outerParam) {
  // আউটার ফাংশনের এক্সিকিউশন কনটেক্স্ট
  var outerVariable = 'I am an outer variable';

  function innerFunction(innerParam) {
    // ইনার ফাংশনের এক্সিকিউশন কনটেক্স্ট
    var innerVariable = 'I am an inner variable';

    console.log(globalVariable); // গ্লোবাল স্কোপের ভ্যারিয়েবল এক্সেস
    console.log(outerVariable); // আউটার ফাংশনের ভ্যারিয়েবল এক্সেস
    console.log(innerVariable); // ইনার ফাংশনের ভ্যারিয়েবল এক্সেস
    console.log(outerParam); // আউটার ফাংশনের প্যারামিটার এক্সেস
    console.log(innerParam); // ইনার ফাংশনের প্যারামিটার এক্সেস
  }

  innerFunction('I am an inner parameter');
}

outerFunction('I am an outer parameter');
/////////////////////////////////////////