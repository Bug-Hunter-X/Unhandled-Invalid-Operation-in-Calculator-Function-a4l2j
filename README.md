# Unhandled Invalid Operation in Calculator Function

This repository demonstrates a common JavaScript error: the lack of handling for invalid input or unexpected conditions.  The `calculate` function doesn't handle cases where an operation other than 'add' or 'subtract' is provided. This leads to undefined behavior.

## Bug

The `bug.js` file contains the flawed code. The function `calculate` should gracefully handle invalid operation inputs, not simply return `undefined`.

## Solution

The `bugSolution.js` file shows the corrected code.  It includes a `default` case in the conditional statement or throws an error for better error handling to prevent unexpected results.