/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
 */
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

function isEmpty2(obj) {
  return Object.keys(obj).length == 0 ? true : false;
}

let schedule = {};

console.log(isEmpty2(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty2(schedule) ); // false
