//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function loop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}
//console.log('loop');
//loop(3);

//2. Next, try looping just like above except using recursion
function recursionLoop(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  recursionLoop(n - 1);
}
//console.log('recursionLoop');
//recursionLoop(3)

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
    let r = 1;
    while (expo > 0) {
        r *= base;
        expo--;
    }
    return r;
}
//console.log('exponent', exponent(2,4))

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base, expo) {
    if (expo === 1) {
        return base;
    }
    return base * recursiveExponent(base, expo - 1);
}

//console.log('recursiveExponent', exponent(2,4))
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
    if (arr.length === 1) {
        return arr[0] * num;
    }
    return [arr.shift() * num].concat(recursiveMultiplier(arr, num))
}

//console.log('recursiveMultiplier', recursiveMultiplier([2,4, 6], 2))

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return [arr.pop()].concat(recursiveReverse(arr))
}
console.log('recursiveReverse', recursiveReverse([1,2,3]))
