/*
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
 */

function checkSpam(str) {
  return str && str.toLowerCase().includes("viagra") || str.toUpperCase().includes("XXX");
}

console.log(checkSpam('innocent rabbit'))
