// Creating a WeakMap
const weakMap = new WeakMap();

// Creating objects to use as keys
const key1 = {};
const key2 = {};

// Adding entries to the WeakMap
weakMap.set(key1, 'Value 1');
weakMap.set(key2, 'Value 2');

// Getting values using keys
console.log(weakMap.get(key1));  // 'Value 1'
console.log(weakMap.get(key2));  // 'Value 2'

// Deleting an entry
weakMap.delete(key1);

// Checking again
console.log(weakMap.get(key1));  // undefined
// This will throw an error
for (const [key, value] of weakMap) {
   console.log(key)
   console.log(value)
   console.log(key, value);
 }
 