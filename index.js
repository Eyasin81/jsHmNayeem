function changeValue(obj) {
  obj.name = "John";
}

let person = { name: "Alice" };
changeValue(person);
console.log(person.name); // এখানে আউটপুট "John" হবে, কারণ person টি pass by reference হিসেবে পাস হয়েছে
