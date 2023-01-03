# Tic-Tac-Toe

### 1st step

Set up the HTML structure for the Tic Tac Toe game.

### 2nd step

Styled the game with a dark theme and made it responsive.

### 3rd step

In this step, I set up the HTML for the gameboard and wrote a JavaScript function that renders the contents of the gameboard array to the webpage. I also filled in the array with "X"s and "O"s for testing purposes.

To render the gameboard, I first created an HTML table and added a row and three cells for each element in the gameboard array. I then added a `data-index` attribute to each cell, which will be used later to identify which cell was clicked by the player.

Next, I wrote a JavaScript function called `renderGameboard()` that loops through the gameboard array and updates the text content of each cell to match the corresponding element in the array. I also added this function to the `window.onload` event to render the gameboard as soon as the page loads.

Now, the gameboard is displayed on the webpage and the cells are updated with the values in the gameboard array.

### 4th step

In this step, I built the functions that allow players to add their marks to a specific spot on the gameboard and tied them to the DOM. I also added the logic that prevents players from playing in spots that are already taken.

To allow players to add their marks to the gameboard, I first added a click event listener to the cells of the gameboard. When a cell is clicked, I retrieve the `data-index` attribute of the cell and use it to determine the corresponding element in the gameboard array.

Next, I wrote a function called `addMark()` that takes the index of the cell as an argument and adds the player's mark to the gameboard array. I also added a check to ensure that the cell is not already taken before allowing the player to add their mark.

Finally, I updated the `renderGameboard()` function to re-render the gameboard after the mark is added, so that the changes are reflected on the webpage.

Now, players can click on the gameboard to place their marks and the gameboard is updated to reflect their moves.