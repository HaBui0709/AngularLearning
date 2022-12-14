/*
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
 */

function sumInput() {
  let array = [];
  let input;
  do {
    input = prompt("Input");
  } while (isFinite(input) && input != "" && array.push(+input));
  return array.reduce((a, b) => a + b);
}

console.log(sumInput())
