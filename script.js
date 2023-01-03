function renderGameboard(gameboard) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = gameboard[index];
  });
}