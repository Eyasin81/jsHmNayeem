// closer 
var a=10
function b(){
    console.log(a)
}
b()


function outerFunction(x) {
    // আউটার ফাংশনের আউটার স্কোপের ভেরিয়েবল
    let outerVariable = 10;
  
    // আউটার ফাংশনের ইন্নার ফাংশন (ক্লোজার)
    function innerFunction(y) {
      // ইন্নার ফাংশন স্কোপের ভেরিয়েবল এবং আউটার ফাংশনের ভেরিয়েবল ব্যবহার
      return x + y + outerVariable;
    }
  
    return innerFunction; // ইন্নার ফাংশনটিই রিটার্ন হয়, এটি একটি ক্লোজার
  }
  
  const closure = outerFunction(5); // আউটার ফাংশন কে কল করে এটি একটি ক্লোজার রিটার্ন করে
  
  console.log(closure(7)); // Output: 22
  