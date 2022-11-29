/*
Add to the prototype of all functions the method defer(ms), that returns a wrapper, delaying the call by ms milliseconds.

Here’s an example of how it should work:

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // shows 3 after 1 second
Please note that the arguments should be passed to the original function.
 */

Function.prototype.defer = function (ms) {
  return (...args) => setTimeout(() => this(...args), ms);

}
function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2);
