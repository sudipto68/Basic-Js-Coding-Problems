const isPrime = (n) => {
  if (n == 1) {
    console.log("1 is neither prime nor composite");
  } else {
    for (var i = 2; i <= n - 2; i++) {
      if (n % i == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
};
var PrimeNumber = isPrime(8);
console.log(PrimeNumber);
