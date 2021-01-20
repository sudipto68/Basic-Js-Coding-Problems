const isPrime = (n) => {
  if (n == 1) {
    console.log("1 is neither prime nor composite");
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
};
var PrimeNumber = isPrime(3);
console.log(PrimeNumber);
