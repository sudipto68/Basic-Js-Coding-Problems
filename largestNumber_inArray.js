var ar = [100, 20, 30, 50];
// var large = ar[0];
// for (var i = 0; i < ar.length; i++) {
//   if (large < ar[i]) {
//     large = ar[i];
//   }
// }
// console.log(large);

// for smallest Element

var smallest = ar[0];
for (var i = 0; i < ar.length; i++) {
  if (smallest > ar[i]) {
    smallest = ar[i];
  }
}
console.log(smallest);
