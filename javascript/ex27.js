/*
There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
 */

function topSalaries(salaries){
  let maxSalary = 0;
  let maxPerson;
  for (let [key, value] of Object.entries(salaries)){
    if (maxSalary < value){
      maxSalary = value;
      maxPerson = key;
    }
  }
  return maxPerson;
}

function topSalaries2(salaries){
  return Object.entries(salaries).reduce(([key1, value1], [key2, value2]) =>
  value1 > value2 ? [key1, value1] : [key2, value2])[0];
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalaries2(salaries))

