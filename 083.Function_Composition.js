// ফাংশন কম্পোজিশন
function print(inp){
    console.log(inp)
}
function multiple(n){
    return n*5
}
function add(a,b){
    return a+b
}
print(multiple(add(3,5)))
//
// দুটি সাধারণ ফাংশন
function double(x) {
    return x * 2;
  }
  
  function addOne(x) {
    return x + 1;
  }
  
  // ফাংশন কম্পোজিশন
  function compose(f, g) {
    return function (x) {
      return f(g(x));
    };
  }
  
  // ফাংশন কম্পোজিশন ব্যবহার
  const doubleAndAddOne = compose(addOne, double);
  
  // এখন doubleAndAddOne ফাংশনটি ব্যবহার করা যাবে
  console.log(doubleAndAddOne(5)); // আউটপুট: 11
  