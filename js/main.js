/* funzione riutilizzabile */
function toggleProperty(element, property) {
  element.classList.toggle(property);
}

function resetGame() {
  const board = document.querySelector(".board");
  board.innerHTML = "";
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

  function bombsGenerator() {
    let randomNums = [];

    while (randomNums.length < 16) {
      let randomNum = Math.floor(Math.random() * totCells) + 1;
      if (!randomNums.includes(randomNum)) {
        randomNums.push(randomNum);
      }
    }

    return randomNums;
  }

  let bombsArray = bombsGenerator();
  console.log(bombsArray);

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

      if (bombsArray.includes(i)) {
        boxes.classList.add("bomb");
        console.log("hai beccato una bomba!");
        /*  alert("hai beccato una bomba!");
        resetGame(); Work in progress*/
      } else {
        console.log("keep playing...");
      }
    });
  }
});

/* casella diventa azzurra al click */
