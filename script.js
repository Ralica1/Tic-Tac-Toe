function renderGameboard(gameboard) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = gameboard[index];
  });
}
const gameboard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

function placeMark(gameboard, index, mark) {
  if (gameboard[index] === "") {
    gameboard[index] = mark;
    return true;
  }
  return false;
}

function handleCellClick(event) {
  const index = event.target.dataset.index;
  const success = placeMark(gameboard, index, currentPlayer);
  if (success) {
    event.target.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click', handleCellClick));


function checkForWin(gameboard) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (gameboard[i * 3] !== "" && gameboard[i * 3] === gameboard[i * 3 + 1] && gameboard[i * 3 + 1] === gameboard[i * 3 + 2]) {
      return gameboard[i * 3];
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (gameboard[i] !== "" && gameboard[i] === gameboard[i + 3] && gameboard[i + 3] === gameboard[i + 6]) {
      return gameboard[i];
    }
  }

  // Check diagonals
  if (gameboard[0] !== "" && gameboard[0] === gameboard[4] && gameboard[4] === gameboard[8]) {
    return gameboard[0];
  }
  if (gameboard[2] !== "" && gameboard[2] === gameboard[4] && gameboard[4] === gameboard[6]) {
    return gameboard[2];
  }

  // Check for tie
  if (gameboard.every(cell => cell !== "")) {
    return "T";
  }

  // Game is not yet over
  return null;
}
function handleCellClick(event) {
  const index = event.target.dataset.index;
  const success = placeMark(gameboard, index, currentPlayer);
  if (success) {
    event.target.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    const result = checkForWin(gameboard);
    if (result !== null) {
      const resultElement = document.createElement('div');
      resultElement.textContent = `Game over! ${result} wins!`.toUpperCase();
      resultElement.style.fontSize = '32px';
      resultElement.style.color = 'black';
      document.querySelector('#controls').appendChild(resultElement);
    }
  }
}