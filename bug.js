function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calculate(operation, a, b) {
  if (operation === 'add') {
    return add(a, b);
  } else if (operation === 'subtract') {
    return subtract(a, b);
  }
  //Forgot to handle invalid operation
}

console.log(calculate('add', 5, 3)); // Output: 8
console.log(calculate('subtract', 10, 4)); // Output: 6
console.log(calculate('multiply', 7, 2)); // Output: undefined