const boxs = document.querySelectorAll(".boxs");
const message = document.getElementById("message");
const newGameBtn = document.getElementById("newGame");
const playAgainBtn = document.getElementById("playAgain");
const xWinCount = document.getElementById("xWin");
const oWinCount = document.getElementById("oWin");
let chance = "O";

// winning patern-
const winPatern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

// alternate X & O
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (chance == "O") {
      box.innerHTML = chance;
      checkWin();
      chance = "X";
    } else {
      box.innerHTML = chance;
      checkWin();
      chance = "O";
    }
    box.disabled = true;
  });
});

// check winning
function checkWin() {
  winPatern.forEach((patern) => {
    let check0 = boxs[patern[0]].innerHTML;
    let check1 = boxs[patern[1]].innerHTML;
    let check2 = boxs[patern[2]].innerHTML;
    if (check0 == chance && check1 == chance && check2 == chance) {
      message.innerHTML = "Winner is : " + chance;
      message.style.display = "block";
      if (chance === "X")
        xWinCount.textContent = parseInt(xWinCount.textContent) + 1;
      else
        oWinCount.textContent = parseInt(oWinCount.textContent) + 1;
      boxs.forEach((box) => box.disabled = true);
    }
  })
}
// Play Again
playAgainBtn.addEventListener("click", () => {
  boxs.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
  })
})
// New Game
newGameBtn.addEventListener("click", () => {
  boxs.forEach((box) => {
    box.innerHTML = "";
    oWinCount.textContent = 0
    xWinCount.textContent = 0
    box.disabled = false;
  })
})
