function renderGameboard() {
  // Get the gameboard cells
  const cells = document.querySelectorAll("#gameboard td");

  // Loop through the gameboard array and update the text content of each cell
  for (let i = 0; i < gameboard.length; i++) {
    cells[i].textContent = gameboard[i];
  }
}
// Bind the addMark() function to the click event of the gameboard cells
document.querySelectorAll("#gameboard td").forEach(cell => {
  cell.addEventListener("click", function(event) {
    // Get the index of the cell that was clicked
    const index = event.target.getAttribute("data-index");
    // Add the player's mark to the gameboard
    addMark(index);
  });
});

// Add the player's mark to the gameboard at the specified index
function addMark(index) {
  // Check if the cell is already taken
  if (gameboard[index] === "") {
    // Add the player's mark to the gameboard array
    gameboard[index] = currentPlayer;
    // Switch to the other player
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    // Render the updated gameboard
    renderGameboard();
  }
}