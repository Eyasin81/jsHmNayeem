// recursive 
function sayHi(n) {
    if(n==0){
        return
    }
    console.log("hello Programmer")
    sayHi(n-1)
  }
  sayHi(10)
//  Method-2
  function factorial(n) {
    // বেস কেস
    if (n === 0) {
      return 1;
    }
    
    // রিকার্সিভ কেস
    return n * factorial(n - 1);
  }
  
  // 5 এর ফ্যাক্টরিয়াল হিসেব
  console.log(factorial(5)); // আউটপুট: 120
  