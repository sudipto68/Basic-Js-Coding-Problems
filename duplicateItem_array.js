// Remove DUplicate elements from array

var ar = [10, 20, 30, 40, 20];
var uniqueItems = [];
for (var i = 0; i < ar.length; i++) {
  var element = ar[i];
  var index = uniqueItems.indexOf(element);
  if (index == -1) {
    uniqueItems.push(element);
  }
}
console.log(uniqueItems);
