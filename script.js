const board = document.querySelector('.board');
let cells = document.querySelectorAll('.cell');
let currentPlayer = 1; // Player 1 goes first
let gameOver = false;
let player1Score = 0;
let player2Score = 0;

board.addEventListener('click', handleClick);

function handleClick(event) {
  // Check if the game is over or if the cell has already been clicked
  if (gameOver || event.target.textContent) {
    return;
  }

  // Place the player's mark on the board
  event.target.textContent = currentPlayer === 1 ? 'X' : 'O';

  // Check if the player has won
  if (checkForWin()) {
    gameOver = true;
    return;
  }

  // Switch to the other player
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}