const fibonacci = (n) => {
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return [0, 1];
  } else {
    var fibo = fibonacci(n - 1);
    var nextItem = fibo[n - 1] + fibo[n - 2];
    fibo.push(nextItem);
    return fibo;
  }
};
var result = fibonacci(12);
console.log(result);
