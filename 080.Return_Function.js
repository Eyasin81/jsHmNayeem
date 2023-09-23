function greet(msg){
    function greeting(name){
        return msg+","+name+"!"
    }
    // return greeting 
}
var gm=greet("Good Morning")
// var sm=greeting("HM Nayeem")
console.log(gm()+" "+sm()) 
// Return Function
function add(x, y) {
    var result = x + y;
    return result;
  }
  
  var sum = add(5, 3);
  console.log(sum); // এটি কনসোলে 8 দেখাবে
  