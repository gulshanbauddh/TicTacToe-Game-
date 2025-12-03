const boxs = document.querySelectorAll(".boxs");
const newGameBtn = document.getElementById("newGame");
const playAgainBtn = document.getElementById("playAgain");
const xWinCount = document.getElementById("xWin");
const oWinCount = document.getElementById("oWin");
const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");
const playUser1 = document.getElementById("playUser1");
const playUser2 = document.getElementById("playUser2");
let currentWinX = true;
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
  [6, 7, 8],
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
      if (chance === "X") {
        xWinCount.textContent = parseInt(xWinCount.textContent) + 1;
        currentWinX = true;
      } else {
        oWinCount.textContent = parseInt(oWinCount.textContent) + 1;
        boxs.forEach((box) => (box.disabled = true));
        currentWinX = false;
      }
    }
  });

  let p1 = parseInt(xWinCount.textContent);
  let p2 = parseInt(oWinCount.textContent);
  const cruntWin = document.querySelector("#cruntWin");
  if (p1 < p2) cruntWin.textContent = playUser1.textContent;
  else if (p1 < p2) cruntWin.textContent = playUser2.textContent;
  else cruntWin.textContent = "n/a";
}
// Play Again
playAgainBtn.addEventListener("click", () => {
  boxs.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
    // current win for current Win Chance-
  });
  if (currentWinX) {
    chance = "X";
    playUser2.parentElement.style.color = "#06ea06";
    playUser1.parentElement.style.color = "#ff5454";
  } else {
    chance = "O";
    playUser2.parentElement.style.color = "#ff5454";
    playUser1.parentElement.style.color = "#06ea06";
  }
});
// New Game
newGameBtn.addEventListener("click", () => {
  boxs.forEach((box) => {
    box.innerHTML = "";
    oWinCount.textContent = 0;
    xWinCount.textContent = 0;
    box.disabled = false;
  });
  chance="O"
});

// Game Start User Name Input
const startGame = document.querySelector("#startGame");
const userInput = document.querySelector("#userInput");
startGame.addEventListener("click", () => {
  playUser1.textContent = user1.value;
  playUser2.textContent = user2.value;
  userInput.style.display = "none";
  document.querySelector(".game-Container").style.pointerEvents = "all";
  document.querySelector(".game-Container").style.opacity = "1";
});
