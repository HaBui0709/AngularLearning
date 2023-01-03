/*
Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
If it is, then provide an example of their code.
 */
let t = {

}
function A() {
  return t;
}
function B() {
  return t;
}

let a = new A();
let b = new B();

console.log( a == b );
