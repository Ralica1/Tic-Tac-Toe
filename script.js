// Initialize constants for the gameboard and cells
const gameboard = document.querySelector("#gameboard");
const cells = gameboard.querySelectorAll("td");

// Initialize variables for the players and current player
let player1 = "";
let player2 = "";
let currentPlayer = "X";

// Initialize a 2D array to track the state of the gameboard
let gameboardState = [  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// Initialize a variable to track the game's status (whether it's ongoing or ended)
let gameEnded = false;

// Create a function to switch the current player
const switchPlayer = () => {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
};

// Create a function to update the gameboard state and the UI
const updateGameboard = (row, col) => {
  gameboardState[row][col] = currentPlayer;
  cells[3 * row + col].textContent = currentPlayer;
};

// Create a function to check if the game has ended
const checkGameEnd = () => {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      gameboardState[i][0] !== null &&
      gameboardState[i][0] === gameboardState[i][1] &&
      gameboardState[i][1] === gameboardState[i][2]
    ) {
      return gameboardState[i][0];
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      gameboardState[0][i] !== null &&
      gameboardState[0][i] === gameboardState[1][i] &&
      gameboardState[1][i] === gameboardState[2][i]
    ) {
      return gameboardState[0][i];
    }
  }

  // Check diagonals
  if (
    gameboardState[0][0] !== null &&
    gameboardState[0][0] === gameboardState[1][1] &&
    gameboardState[1][1] === gameboardState[2][2]
  ) {
    return gameboardState[0][0];
  }
  if (
    gameboardState[0][2] !== null &&
    gameboardState[0][2] === gameboardState[1][1] &&
    gameboardState[1][1] === gameboardState[2][0]
  ) {
    return gameboardState[0][2];
  }

  // Check for a draw
  if (gameboardState.flat().every(cell => cell !== null)) {
    return "D";
  }

  // Game is ongoing
  return null;
};
// Create a function to handle cell clicks
const handleCellClick = event => {
  // Get the row and column of the clicked cell
  const row = event.target.parentNode.rowIndex;
  const col = event.target.cellIndex;

  // Ignore the click if the game has ended or the cell has already been clicked
  if (gameEnded || gameboardState[row][col] !== null) {
    return;
  }

  // Update the gameboard state and the UI
  updateGameboard(row, col);

  // Check if the game has ended
  const winner = checkGameEnd();
  if (winner === "X" || winner === "O") {
    // Display the winner
    document.querySelector("#result").textContent = `${winner} wins!`;
    gameEnded = true;
  } else if (winner === "D") {
    // Display the draw
    document.querySelector("#result").textContent = "It's a draw!";
    gameEnded = true;
  } else {
    // Switch the current player
    switchPlayer();
  }
};

// Add event listeners for cell clicks
cells.forEach(cell => cell.addEventListener("click", handleCellClick));

// Get the start/restart button and add an event listener for clicks
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
  // Get the player names
  player1 = document.querySelector("#player1").value;
  player2 = document.querySelector("#player2").value;

  // Reset the game
  currentPlayer = "X";
  gameboardState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  gameEnded = false;

  // Clear the cells and result display
  cells.forEach(cell => (cell.textContent = ""));
  document.querySelector("#result").textContent = "";
});