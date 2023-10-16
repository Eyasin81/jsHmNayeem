// method-1
/* function sqr(n){
   return n*n
} */
// console.log(sqr());// Return NaN
// method-2

function sqr(n=1){/* এইখানে  1 হল  Default প্যারামিটার */
   return n*n
}
// console.log(sqr());// Return Default 1 

function test(name,msg){
   console.log(`${name} ! ${msg}`);
}
test(null,"hello") //return null hello
/*  যদি Default প্যারামিটার ব্যবহার করা হয় তবে বাহির থেকে null ব্যবহার করা  যাবে না  */
