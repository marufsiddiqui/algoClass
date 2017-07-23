/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factorial2(n) {
    let result = 1;
    for(var i = 2; i <= n; i++) {
        result *= i
    }
    return result;
}

console.log(factorial(5))
console.log(factorial2(5))
