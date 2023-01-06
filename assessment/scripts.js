function initItems(contentForm) {
  const initialItems = [
                        {itemText: 'Buy pizza', isChecked: false},
                        {itemText: 'Hello World', isChecked: false},
                        {itemText: 'Something went wrong', isChecked: true}
  ];
  initialItems.map(item => createItem(item.isChecked, item.itemText))
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
function togglePopup(pointerEvent = "auto", opacity = "1", hidden = true) {
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

const ordinalNumberMap = new Map([
    [1, 'st'],
    [2, 'nd'],
    [3, 'rd']
])
function nth(d) {
  return d + ((d > 3 && d < 21) ? 'th' : `${ordinalNumberMap.get(d % 10)} || 'th'`);
}
