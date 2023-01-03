function initItems(contentForm) {
  const itemsMap = new Map([["Buy pizza", false], ["Contrary to popular", false], ["Something went wrong", true]]);
  [...itemsMap.entries()].map(([labelText, isChecked]) => createItem(isChecked, labelText))
    .forEach(item => contentForm.append(item));
}

function createItem(isChecked, labelText) {
  const div = document.createElement("div");
  div.className = "item";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = isChecked;

  const label = document.createElement("label");
  label.textContent = labelText;
  label.className = isChecked ? "strike" : "";

  div.append(input, label);
  return div;

}
function adjustDisplayOfMainScreenAndTogglePopup(pointerEvent = "auto", opacity = "1", hidden = true) {
  document.querySelector(".container").style.pointerEvents = pointerEvent;
  document.querySelector(".container").style.opacity = opacity;
  popup.hidden = hidden;
}

function fillInDateTime() {
  document.querySelector(".dayOfWeek").textContent = getDayOfWeek();
  document.querySelector(".dayOfMonth").textContent = getDateOfMonth();
  document.querySelector(".month").textContent = getMonth();
}

function getMonth() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[now.getMonth()];
}

function getDateOfMonth() {
  return nth(now.getDate());
}

function getDayOfWeek() {
  const dayOfWeekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return dayOfWeekNames[now.getDay()];
}

function nth(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:
      return d + "st";
    case 2:
      return d + "nd";
    case 3:
      return d + "rd";
    default:
      return d + "th";
  }
}
