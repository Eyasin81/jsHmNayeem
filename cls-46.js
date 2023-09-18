// Search Value in Array
var arr=[1,2,3,4,5,6,7,8]
var f=10;
for(var i=0;i<arr.length;i++){
if(arr[i]==f){
        console.log("Data Found at Index "+ i)
        break
    }else{
        console.log("Data not Found")
       break 
    }
}

// একটি 2D অ্যারে বানানো
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // ম্যাট্রিক্সের উপাদান অ্যাক্সেস করা
  console.log(matrix[0][0]); // প্রথম সারি, প্রথম কলামের উপাদান (1)
  console.log(matrix[1][2]); // দ্বিতীয় সারি, তৃতীয় কলামের উপাদান (6)
  