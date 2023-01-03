/*
Prime number
 */

function isPrimeNumber(number) {
  if (number == 2 ||  number == 3){
    return true;
  }
  for (let i = 2; i<= Math.pow(number, 0.5); i++){
    console.log(i)
    if (number % i == 0){
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(29))
