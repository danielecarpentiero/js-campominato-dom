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

/* casella diventa azzurra al click */
const myDiff = document.getElementById("difficolta").value;
for (let i = 0; i < 100; i++) {
  const boxes = document.createElement("div");
  boxes.classList.add("box");
  boxes.classList.add("flex");
  boxes.innerHTML = i + 1;
  boxAdder.append(boxes);
  boxes.addEventListener("click", function () {
    toggleProperty(boxes, "color");
    console.log(`hai cliccato sulla casella numero ${i}`);
  });
  switch (myDiff) {
    case "medio":
      boxes.classList.add("medium");
      break;
    case "difficile":
      boxes.classList.add("hard");
      break;
    case "facile":
    default:
      boxes.classList.add("easy");
      break;
  }
}
