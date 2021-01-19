var fact = 1;
const factorial = (n) => {
  for (var i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log("factorial of " + n + " is " + fact);
};
factorial(0);
