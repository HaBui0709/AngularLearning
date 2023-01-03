function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    return counter.count++;
  };


  counter.count = 0;
  counter.set = value => count = value;
  counter.decrease = () => --count;

  return counter;
}

let counterr = makeCounter();
// console.log( counterr() ); // 0
console.log( counterr.set(89) ); // 1
console.log(counterr.decrease())
