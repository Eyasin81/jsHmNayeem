class Shape {
   constructor() {
     this.color = 'red'; // Public property
   }
 
   // Public method
   draw() {
     console.log(`Drawing a shape with color ${this.color}`);
     this._internalMethod(); // Calling a private method
   }
 
   // Private method (indicated by naming convention)
   _internalMethod() {
     console.log('This is an internal method.');
   }
 }
 
 const circle = new Shape();
 circle.draw(); // 'Drawing a shape with color red' followed by 'This is an internal method.'
 