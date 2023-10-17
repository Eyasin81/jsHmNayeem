var myArray=[1,2,3,4,5]
function CreateIterator(collection){
let i=0
return {
   next(){
   return{
      done:i=>collection.length,
      value: collection[i++]
   }
   }
}
}
let iterator=CreateIterator(myArray)
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
