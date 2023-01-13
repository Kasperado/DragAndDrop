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
    container.appendChild(draggedItem);
  });
  
});
