// typeof
let x = 10;
console.log("typeof x → " + typeof x);

let name = "Mukesh";
console.log("typeof name → " + typeof name);

// instanceof
let arr = [1, 2, 3];
console.log("arr instanceof Array → " + (arr instanceof Array));

// in operator
let person = { name: "Rahul", age: 25 };
console.log("'name' in person → " + ("name" in person));
console.log("'salary' in person → " + ("salary" in person));

// ternary operator
let age = 18;
let result = (age >= 18) ? "Eligible to Vote" : "Not Eligible";
console.log("Ternary Result → " + result);

// delete operator
delete person.age;
console.log("After delete age → " + ("age" in person));

// new operator
let date = new Date();
console.log("New Date Object → " + date);
