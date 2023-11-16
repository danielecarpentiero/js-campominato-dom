/* funzione riutilizzabile */
function toggleProperty(element, property) {
  element.classList.toggle(property);
}

/* bottone che scompare */
const boxAdder = document.querySelector(".board");
const buttonToggle = document.querySelector(".play");

buttonToggle.addEventListener("click", function () {
  toggleProperty(boxAdder, "hidden");
  boxAdder.innerHTML = "";

  const myDiff = document.getElementById("difficolta");
  console.log(myDiff.value);

  let level = "";
  let totCells = 0;
  switch (myDiff.value) {
    case "medio":
      level = "medium";
      totCells = 81;
      break;
    case "difficile":
      level = "hard";
      totCells = 49;
      break;
    case "facile":
      level = "easy";
    default:
      totCells = 100;
      break;
  }

  for (let i = 1; i < totCells + 1; i++) {
    const boxes = document.createElement("div");
    boxes.classList.add("box");
    boxes.classList.add("flex");
    boxes.classList.add(level);
    boxes.innerHTML = i;
    boxAdder.append(boxes);
    boxes.addEventListener("click", function () {
      toggleProperty(boxes, "color");
      console.log(`hai cliccato sulla casella numero ${i}`);
    });
  }
});

/* casella diventa azzurra al click */
