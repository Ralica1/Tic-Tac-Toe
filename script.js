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