// curring function 
function currying(a){
    return function(b){
        return function(c){
            return a+b+c
        }
       
    }
}
var result=currying(10)(20)(0)
console.log(result)
// Method-2 

function add(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const add5 = add(5);
  console.log(add5(3)); // আউটপুট: 8
  