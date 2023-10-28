/* const BASE_URL='https://jsonplaceholder.typicode.com'
fetch(`${BASE_URL}/users/1`)
.then((res)=>{
res.json()
.then((data)=>{
   console.log(data)
})
}).catch((e)=>{
   console.log(e)
})
 */

// fetch api call with 
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // রেসপন্সের ডেটা পাওয়া হলে এখানে কোড লিখুন
    return response.json();
  })
  .then(data => {
    // ডেটা প্রসেসিং করুন
    console.log(data);
  })
  .catch(error => {
    // ত্রুটি হ্যান্ডল করুন
    console.error('নেটওয়ার্ক ত্রুটি:', error);
  });
