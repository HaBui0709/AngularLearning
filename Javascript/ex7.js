/*
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
 */
let calculator = {
  read(){
    this.a = 10 // don't have prompt in non-browser env
    this.b = 8
  },
  sum(){
    return this.a + this.b;
  },
  mul(){
    return this.a * this.b;
  }
}

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
