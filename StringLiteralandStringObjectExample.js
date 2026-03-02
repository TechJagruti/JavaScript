    // 1️⃣ String Literal
var str = "This is string literal";

console.log("1) By String Literal:");
console.log(str);

// 2️⃣ String Object using new keyword
var stringname = new String("Hello JavaScript String");

console.log("2) By String Object (new keyword):");
console.log(stringname);

// Extra: Checking Type Difference
console.log("Type Checking:");
console.log("Type of str: " + typeof str);
console.log("Type of stringname: " + typeof stringname);

// Extra: Comparison
console.log("Comparison:");
console.log("str == stringname : " + (str == stringname));
console.log("str === stringname : " + (str === stringname));
