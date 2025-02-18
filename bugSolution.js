function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calculate(operation, a, b) {
  switch (operation) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    default:
      throw new Error('Invalid operation');
  }
}

console.log(calculate('add', 5, 3)); // Output: 8
console.log(calculate('subtract', 10, 4)); // Output: 6

try {
  console.log(calculate('multiply', 7, 2)); // Throws an error
} catch (error) {
  console.error('Error:', error.message); // Output: Error: Invalid operation
} 