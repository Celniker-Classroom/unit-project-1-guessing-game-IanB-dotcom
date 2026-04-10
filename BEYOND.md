# Above and Beyond

1. What Extra Features You Added
I added three extra features. The first is styling with a powder blue background and polished visual design. The second is a tracker of all past guesses so the player can see what they previously inputted. The third is a changing background color; if you are close the background changes to orange, and if you are very close it changes to red.

2. Where Each Feature Is in the Code
The styling is in styles.css. The guess tracker appears in a few portions of script.js. The first appearance is on line 64  (document.getElementById("history").innerHTML = ""), which clears the list at  the start of each new round. The second location is lines 108-110, where each  guess is created as a list item and appended to the history. The third feature,  the changing background color, can be found on lines 117, 121, 129, 133, and 138 inside the guessBtn event listener.

3. Why These Features Improve the Game
All three features improve the game for different reasons. The styling makes the game more visually appealing and enjoyable to play. The guess tracker helps  players avoid repeating guesses and stay organized. The color changing background  gives the game an interactive feel and adds a visual layer on top of the hot/warm/cold feedback that already exists.