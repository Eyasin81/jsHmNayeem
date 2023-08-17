// Method 
//1. add  property.add
// 2. has() property.has()
// 3. delete() property.delete()
const weakSet = new WeakSet();

// Creating objects to store in the WeakSet
const obj1 = { name: 'Object 1' };
const obj2 = { name: 'Object 2' };
// Adding objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// Checking if an object is in the WeakSet
console.log(weakSet.has(obj1));  // true

// Removing an object from the WeakSet
weakSet.delete(obj2);

// Checking again
console.log(weakSet.has(obj2));  // false
