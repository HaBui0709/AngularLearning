/*
There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

If salaries is empty, then the result must be 0.
 */
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => +a + +b);
}

function sumSalaries2(salaries) {
  let sum = 0;
  for (const salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries2(salaries) );
