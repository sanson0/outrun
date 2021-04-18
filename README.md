# Outrun

A memory game for milestone 2 project

## User Experience

Purpose of this project:-
* Entertainment
* Improve memory
* Improve coordination

Wireframes
[link to wireframe view of the game](assets/docs/Outrun.pdf)

## Features

* Boardgame with 25 tiles
* The player is represented by a star that moves from tile to tile
* When the player reaches a question mark, the tiles begin to show a sequence of colours.
The colours are shown as background colours of the tiles, so the boardgame still shows.
* Colours consist of red, blue, green and yellow.
* When the sequence ends, the player is asked to type in the sequence according to colour,
 which is decided randomly by the program.
* If the player gets it right, then the player keeps moving. Number of games won is recorded in a tally.
* If the player gets it wrong, then the game stops and resets, progress is lost in terms of the tally.
* After a short while, the beginning tiles turn black, this is the shadow chasing the player.
* There is an explanation section containing rules of the game.

## User stories

As a player, I would like:-
* to be entertained!
* a game that requires memorising patterns so that I can improve my memory
* a game that requires coordination so that I can improve it.
* to progress through the game so that I can escape danger.
* a lot of interaction with the game so I feel involved.
* an easy and hard mode so I can remain challenged as I improve at the game.

## Deployment and testing
### Deployment
### testing
There are several methods for testing:-
1. Manual testing of functionality of the game
2. Manual testing of responsive design
3. Manual testing for features required in the game
4. Testing of code using code validators
5. Testing of code using JShint
6. Testing of performance using Lighthouse (in Chrome browser)

Testing of functionality of the game ideally requires a flow chart of actions.
[link to flowchart of the game](assets/docs/flowchart.pdf)

A list of functions to check:-
* Game loads
* If hard mode selected, button changes colour and game timings are altered.
* If play selected, game starts
* Tally updates with games in a row won
* Star moves on board
* If the reset button is clicked at any time in the game or after it finishes, the game reloads, any progress is lost.
* Colour sequence starts when question mark on board is reached.
* Coloured tiles below the main board disappear (so the sequence has to be memorised).
* Player taps in sequence using coloured tiles, when they are visible
* Colours selected appear in row next to 'You answered'
* Game checks the sequence entered against the sequence displayed.
* If the sequence is correct, a message saying 'Well done' is displayed.
* The colours in row next to 'You answered' and the 'Well done' message disappear.
* If the sequence is wrong, a message saying 'Oh no you were caught' is displayed.
* If the sequence is wrong, the game resets after message is displayed, progress is lost.
* The star continues to move around the board until the next question mark or last tile is reached.
* If the last tile is reached, a message saying 'Well played' appears under control panel.

Testing of responsive design is demonstrated by screenshots of the game at different screen widths.
Responsive design testing has been done on different devices as an extra check.
Features present in the game were checked against the list of features in this READme file.
Testing of the code was done using the W3C code validator for HTML and CSS.
[link to code validator results](assets/docs/code_validators.pdf)

## Bugs and design issues

A design problem occurred with the sequence of colours. The colours are produced randomly by JavaScript
code and the player has to tap or click the correct sequence. If the same colour is repeated next in the
sequence eg. blue, red, red, green then it is not clear if four colours or three were displayed and it 
is not clear what to tap or click in response. The problem was solved by displaying white tiles between
all colours within the sequence. This makes the user experience much better because it is obvious what to do.

A slight code problem occurred when trying to move the star around the board, following the numbers in order.
When the star reached the ends of rows 1 and 3, it continued from left to right on rows 2 and 4. This was not
intended when the game was designed. This was fairly easy to fix using the instruction 'float: right' in CSS.
The tiles were ordered from right to left on rows 2 and 4 allowing JavaScript code to move the star from tile 1
to 25 in order.

One of the features of the game is to stop the progress of the star around the board if an answering
sequence goes wrong. This proved quite tricky to implement, with different methods tried.

Break statements don't work well in nested if statements, the break statement acts on the if statement instead
of the loop. The switch command (recommended by stackoverflow) was tried but did not give consistent results.
The code had to be rewritten in a different way in order to stop the game if an error was made on the sequence
recollection. If a certain fault message is detected then the game is reset by reloading the browser.
This prevents another problem from occurring. If the fault message was detected and the loop was made to stop
by adjusting the loop number, the old game restarted as well as a new one when the play button was clicked.

## Credits

[geeks for geeks](www.geeksforgeeks.org) helped implement the for loop to allow a sequence to be set
up of colours so there is a 1 sec delay each time:-
setTimeout(function(){square();}, 1000*j);

Thrown for a loop: understanding for loops and timeouts in JavaScript [free CodeCamp](www.freeCodeCamp.org)

Thanks to Mentor Nishant for advice on how many features to include in the game (so it was not too complicated),
lots of advice on how to simplify code so that there is less of it, improving maintainability, decreasing 
probability of bugs, improving understanding of code for someone new to the project. Also, suggestions on
improving user experience, explanation of rules of game, tips on making the game's appearance look better.