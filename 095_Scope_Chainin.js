var a=34
function A(){
    var b=12
    function B(){
        var c=23
        console.log(c);
    }
    function C(){
        var d=56
        console.log(d);
    }
    console.log(b);
    D()
    B()
    C()
    function D(){
        return n+a
    }
}
//A = a,b,B(),C(),D()
//B = a,b,c,B(),C(),D()
//C= a,b,d ,B(),C()D()

/* 

var x = 10;

function outer() {
  var y = 20;
  
  function inner() {
    var z = 30;
    console.log(x + y + z);
  }
  
  return inner;
}

var closureFunc = outer(); // outer ফাংশনটি একটি ফাংশন রিটার্ন করে
closureFunc(); // এখন inner ফাংশনটি কল করা হলে x = 10, y = 20, z = 30 হয়

*/