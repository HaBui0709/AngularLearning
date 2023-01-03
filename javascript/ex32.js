/*
Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600
P.S. The function should work at any day, the “today” is not hardcoded.
 */

function getSecondsToTomorrow(){
  let now = new Date();
  let tomorrow = new Date(now);
  tomorrow.setHours(0, 0, 0);
  tomorrow.setDate(now.getDate() + 1);
  return Math.round((tomorrow - now)/1000)
}
console.log(getSecondsToTomorrow())

