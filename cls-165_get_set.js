// program
// method-1
let student={
   firstName:"monika",
   get getName(){
     console.log(this.firstName); 
   }
}
// access 
// console.log(student.firstName);
// // get theke access
// student.getName

//////////////////set
let student1={
   firstName:"anika",
   set changeName(newName){
   return this.firstName=newName
   }
}
console.log(student1.firstName);//anika
student.changeName="afifa"
console.log(student1.firstName);