# Outrun
This is a simple web game with boardgame layout and regular colour sequences to test your memory and
also coordination as there is a time limit to input your answer. There is the option of a hard mode 
if the normal settings are too easy. 
Watch for The Shadow chasing you round the board, it will catch you if you get the sequences wrong!
A tally of games won in a row appears at the top of the board. Instructions are available if needed.

Good Luck!

NB. This game has been developed as the milestone 2 project of the Diploma in Software Development with The Code Institute.

## Why make this game?

This web game can be used:-
* for entertainment
* to improve memory
* to improve coordination
* to improve your speed

### User stories

As a player, I would like:-
* to be entertained!
* a game that requires memorising patterns so that I can improve my memory
* a game that requires coordination so that I can improve it.
* to progress through the game so that I can escape danger.
* a lot of interaction with the game so I feel involved.
* an easy and hard mode so I can remain challenged as I improve at the game.

## Features of the game

* The game has a boardgame layout with 25 tiles in main area.
* The player is represented by a star that moves from tile to tile.
* When the player reaches a question mark, the tiles begin to show a sequence of colours.
* The colours are shown as background colours of the tiles, so the boardgame still shows.
* Colours consist of red, blue, green and yellow.
* While the colour sequence shows, 4 tiles of different colours disappear (to stop cheating!)
* When the sequence ends, the player is asked to type in the sequence according to colour,
 which is decided randomly by the program (4 tiles reappear).
* If the player gets it right, then the player keeps moving. Number of games won (in a row) is recorded in a tally.
* A correct sequence results in a message of "Well done!".
* If the player gets it wrong, then the game stops and resets, progress is lost in terms of the tally.
* A wrong sequence results in a message saying "Oh no, you were caught..."
* After a short while, the beginning tiles turn black, this is the shadow chasing the player.
* There is an explanation section containing rules of the game.
* Regular positive feedback encourages the player to keep playing.

Decisions on what to include were done with the help of a [feasibility study](assets/docs/what_to_include.pdf)

Wireframes [link to wireframe view of the game](assets/docs/Outrun.pdf)

### Features left to include
It would be good to increase the difficulty level but allow multiple chances to type in a correct sequence.
The player only has one chance to get it right at the moment before the game resets and loses progress.

Another feature that could be added is an extension of the colour sequence, so an increase from 4 colours for
a harder game. Also, the sequence to remember could depend on shape displayed as well as colour.
## Technologies used
Click names for links to their websites (or useful sites).
*   [HTML](https://html.spec.whatwg.org/)
    * HTML code provides basic structure of a web page and proper formatting of text and images.
*   [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
    * Cascading Style Sheets (CSS) allow modification of appearance of elements in the HTML file.
*   [JavaScript](https://www.javascript.com/)
    * Text-based programmimg language that converts a static web page into a more interactive page.
*   [Github](https://github.com/)
    * Github is a code hosting platform for version control and collaboration.
*   [Gitpod](https://www.gitpod.io/)
    * Online Integrated Development Environment (IDE) for Github
*   [HTML validator](https://validator.w3.org/)
    * HTML code validator to check for errors in HTML code.
*   [CSS validator](https://jigsaw.w3.org/css-validator/)
    * CSS code validator to check for errors in CSS code.
*   [JShint](https://jshint.com/)
    * JavaScript code quality checking tool.
*   [Fontawesome](https://fontawesome.com)
    * Fontawesome is very useful for icons such as the star, down arrow and question marks of the game.


## Deployment
The process of deploying the website is described in this section and instructions are 
provided for deployment of changes to website.
The Gitpod workspace was created from the new repository 'outrun' on Github. 
To make changes to the website, log in to Gitpod to modify code within the workspace.
Deploying the Website

The website code was created/ modified in Gitpod, then all the files were saved.
The following was typed at the Gitpod commmand line:-

1.   Git add (files created/ modified)
2.   git commit -m "commments on what was created or changed"
3.   git push (this command transfers code from Gitpod to the repository in Github)
4.   On the Github site, the settings menu was selected, this displayed a new screen.
5.   In the section called 'Github Pages' where it says 'Source', the main branch was selected (the default branch).
6.   'Save ' was clicked to display the URL of the website.

The address of this website is https://sanson0.github.io/outrun/
Making changes to the website

Whenever new changes to the code are made in Gitpod (within the main branch), and these changes are saved, and commands
git add, git commit and git push are used, the changes to the website are automatically deployed (so they appear at the
address https://sanson0.github.io/outrun/). Currently there is only one branch.

### Steps for making a local copy (cloning)
1.  It is recomended that a folder is set up to receive the cloned copy of the repository.
2.  Open the repository in Github and click 'Code'.
3.  To clone the repository using HTTPS, under "Clone with HTTPS", click on the clipboard symbol.
4.  Click on "Open with GitHub Desktop"
5.  Follow the prompts in GitHub Desktop to complete the clone

## Testing
There are several methods for testing:-
1. Manual testing of functionality of the game
2. Manual testing of responsive design
3. Manual testing for features required in the game
4. Testing of code using code validators
5. Testing of code using JShint
6. Testing of performance using Lighthouse (in Chrome browser)
7. Testing the game on other players
8. Testing in Replit

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
[link to responsive design results](assets/docs/responsive_design.pdf)
Responsive design testing has been done on different devices as an extra check.

Features present in the game were checked against the list of features in this READme file.

Testing of the code was done using the W3C code validator for HTML and CSS.
[link to code validator results](assets/docs/code_validators.pdf)

Testing of the code was done using the JShint code quality checking tool.
[link to JavaScript code quality checking tool results](assets/docs/JShint.pdf)

Testing of the web game was done using Lighthouse (in the Chrome web browser)
[link to Lighthouse results](assets/docs/lighthouse.pdf)

Testing of the web game was done by other players to check if it was intuitive to play and if it was
at a reasonable difficulty level. Too easy would be boring and too difficult would put people off playing.
[Players test the game](assets/docs/other_players.pdf)

Testing in Replit was done as an extra check. The repository for 'Outrun' was opened using Replit and the
game was tested.
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
### Content
[geeks for geeks](www.geeksforgeeks.org) helped implement the for loop to allow a sequence to be set
up of colours so there is a 1 sec delay each time:-
setTimeout(function(){square();}, 1000*j);

Thrown for a loop: understanding for loops and timeouts in JavaScript [free CodeCamp](www.freeCodeCamp.org).
Thrown for a loop helped to implement the loop inside the function 'Boardgame' in JavaScript.

Thanks to Mentor Nishant for advice on how many features to include in the game,
lots of advice on how to simplify code so that there is less of it, improving maintainability, decreasing 
probability of bugs, improving understanding of code for someone new to the project. Also, suggestions on
improving user experience, including explanation of rules of game and tips on making the game's appearance look better.

W3 schools hoverable dropdown menu, using HTML and CSS, was used for the instructions on smaller devices. The dropdown 
menu was adapted to display information instead of links, with changes to colours.
[Dropdown menu](https://www.w3schools.com/howto/howto_css_dropdown.asp)

GitHub Docs provided information on how to make a local copy of a repository.
[Cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

### Media
2 images were used in the game, both from [Pixabay](https://pixabay.com):-

[Running figure](https://cdn.pixabay.com/photo/2014/04/03/00/40/runner-309053_960_720.png)

[Marble background](https://cdn.pixabay.com/photo/2021/02/09/16/56/marble-5999144_960_720.jpg)