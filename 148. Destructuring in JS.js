
// Object Destaructure 
let person={
   name:"Eyaisin",
   age:24,
   address:{
      city:"Naogaon",
      Country:"Bangladesh"
   }
}
//Object Destructuring
let {name,age,address:{city}}=person
// console.log(name);
// console.log(age);
// console.log(city);
console.log(`My Name is ${name} and I am ${age} Years Old MY current City in ${city}`);

//Array Destructuring
let myArray=[1,2,3,4,5]
let [a,b,,,e]=myArray;
// fist element
console.log(b);
// last element
console.log(e)
// function 
// function 



function person({firstName,lastName}){
   console.log(`MY Name is$${firstName} ${lastName}`)
}
let myName={
   firstName:"Eyaisn",
   LastName:"Ali"
}
console.log(myName)
