class ParentClass{
   doPrint(){
      console.log("I am a Parent Class")
   }
}

// একই ফাংশন ২ জনার কাছে থাকলে চাইল্ড কাছ থেকে নিবে ।
class Studnet extends ParentClass{
   // Method Over Righting 
   doPrint(){
      console.log("doPrint() is Printing Print")
   }
}
let e=new Studnet()
e.doPrint()
