function renderGameboard() {
  // Get the gameboard cells
  const cells = document.querySelectorAll("#gameboard td");

  // Loop through the gameboard array and update the text content of each cell
  for (let i = 0; i < gameboard.length; i++) {
    cells[i].textContent = gameboard[i];
  }
}