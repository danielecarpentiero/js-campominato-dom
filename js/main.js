/* funzione riutilizzabile */
function toggleProperty(element, property) {
  element.classList.toggle(property);
}

/* bottone che scompare */
const boxAdder = document.querySelector(".board");
const buttonToggle = document.querySelector(".play");

buttonToggle.addEventListener("click", function () {
  toggleProperty(boxAdder, "hidden");
});

const selectDiff = document.getElementById("difficolta");
/* casella diventa azzurra al click */
for (let i = 0; i < 49; i++) {
  const boxes = document.createElement("div");
  boxes.classList.add("box");
  boxes.classList.add("flex");
  boxes.innerHTML = i + 1;
  boxAdder.append(boxes);
  boxes.addEventListener("click", function () {
    toggleProperty(boxes, "color");
    console.log(`hai cliccato sulla casella numero ${i}`);
  });
}
