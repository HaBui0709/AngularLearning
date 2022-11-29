/*
Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

For instance:

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"
 */

function getWeekDay(date){
  let day = date.getDay();
  const dayMap = new Map([[0, 'SU'], [1, 'MO'], [2, 'TU'], [3, 'WE'], [4, 'TH'], [5, 'FR'], [6, 'SA']]);
  return dayMap.get(day);
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
console.log( getWeekDay(date) );
