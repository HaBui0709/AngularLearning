/*
Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};
 */
let user = {
  name: "John Smith",
  age: 35
};

let stringifiedUser = JSON.stringify(user);
console.log(stringifiedUser)
let unStringifiedUser = JSON.parse(stringifiedUser);
console.log(unStringifiedUser)
