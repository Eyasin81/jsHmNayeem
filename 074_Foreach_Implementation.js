
var arr=[1,2,3]
// arr.forEach(function(value,index,arr){
//     console.log(value,index,arr)
// })
var all=arr.forEach((value,index,arr)=>{
    console.log(value)
})
console.log(all)

//forEach 
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (currentValue, index, array) {
  console.log(`Index ${index}: ${currentValue}`);
});

// Output:
// Index 0: 1
// Index 1: 2
// Index 2: 3
// Index 3: 4
// Index 4: 5
