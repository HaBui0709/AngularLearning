/*
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
 */
let array = ["Jazz", "Blues"];
console.log(array)
array.push("Rock-n-Roll");
console.log(array)
array[(array.length - 1)/2] = "Classics"
console.log(array)
array.shift();
console.log(array)
array.unshift("Rap", "Reggae");
console.log(array)


