// Generate method-1
/* function* generate(){
   yield 1
   yield 2
   yield 3
}
let it=generate()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); */
// Method-2 
let myArray =[1,2,3,4,5]
function* generate1(collection){
   for(let i=0;i<collection.length;i++){
      yield collection[i]
   }
}
// let it=generate1(myArray)
// console.log(it.next());// output 1
// console.log(it.next());// output 2
// console.log(it.next());// output 3
// console.log(it.next());// output 4