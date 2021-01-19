var a = 10;
var b = 20;
console.log(a, b);
// using temporary variable

// var temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// without using temporary variable

a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
