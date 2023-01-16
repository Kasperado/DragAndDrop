import './style.css'

const allRows = document.querySelectorAll(".row");
const allContainers = document.querySelectorAll(".row-container");
let draggedItem = null;

allRows.forEach((row) => {

  row.addEventListener("dragstart", () => {
    row.classList.add("dragged");
    draggedItem = row;
  });

  row.addEventListener("dragend", () => {
    row.classList.remove("dragged");
    draggedItem = null;
  });

});

allContainers.forEach((container) => {

  container.addEventListener("dragover", (event) => {
    event.preventDefault();
    // Calculate where to put dragged row
    let mousePosY = event.y;
    let putBefore = null;
    let bestY = Number.MAX_VALUE;
    [...container.children].forEach((row) => {
      if (row.classList.contains("dragged")) return;
      let rowRect = row.getBoundingClientRect();
      let rowPositionY = rowRect.y + rowRect.height / 2;
      if (rowPositionY > mousePosY && bestY > rowPositionY) {
        putBefore = row;
        bestY = rowPositionY;
      }
    });
    // Put it
    if (putBefore) container.insertBefore(draggedItem, putBefore);
    else container.appendChild(draggedItem);
  });
  
});
