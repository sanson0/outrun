// jshint esversion: 6
let tileRow;
const NUMBER_OF_TILES = 25; // This number represents number of blocks in game.
const NUMBER_OF_COLORS = 4; // This number represents number of colours in sequence.
let count;
// All board game tiles are turned white by this function
function squareWhite() {

    tileRow = document.getElementsByClassName("main-tile");

    for (let index = 0; index < NUMBER_OF_TILES; index++) {
        tileRow[index].style.backgroundColor = 'white';
    }
}
function blankTiles() {
    let myBox = document.getElementById('answer-box');
    myBox.innerHTML = "";
    let colNum1 = document.getElementById("answer-one");
    let colNum2 = document.getElementById("answer-two");
    let colNum3 = document.getElementById("answer-three");
    let colNum4 = document.getElementById("answer-four");
    colNum1.style.backgroundColor = "white";
    colNum2.style.backgroundColor = "white";
    colNum3.style.backgroundColor = "white";
    colNum4.style.backgroundColor = "white";
}
function showButtons() {
    let buttonOne = document.getElementById("one");
    let buttonTwo = document.getElementById("two");
    let buttonThree = document.getElementById("three");
    let buttonFour = document.getElementById("four");
    buttonOne.style.visibility = "visible";
    buttonTwo.style.visibility = "visible";
    buttonThree.style.visibility = "visible";
    buttonFour.style.visibility = "visible";
}
function hideButtons() {
    let buttonOne = document.getElementById("one");
    let buttonTwo = document.getElementById("two");
    let buttonThree = document.getElementById("three");
    let buttonFour = document.getElementById("four");
    buttonOne.style.visibility = "hidden";
    buttonTwo.style.visibility = "hidden";
    buttonThree.style.visibility = "hidden";
    buttonFour.style.visibility = "hidden";
}
function setAnswerColors(color, value) {
    let elmAnswer;

    if (count === 1) {
        elmAnswer = document.getElementById("answer-one");
    } else if (count === 2) {
        elmAnswer = document.getElementById("answer-two");
    } else if (count === 3) {
        elmAnswer = document.getElementById("answer-three");
    } else {
        elmAnswer = document.getElementById("answer-four");
    }

    elmAnswer.style.backgroundColor = color;
    elmAnswer.innerHTML = value;
}
//player types in sequence
function playerTypes() {
    let buttonOne = document.getElementById("one");
    buttonOne.addEventListener("click", function () {
        setAnswerColors("red", "0");
    });

    let buttonTwo = document.getElementById("two");
    buttonTwo.addEventListener("click", function () {
        setAnswerColors("blue", "1");
    });

    let buttonThree = document.getElementById("three");
    buttonThree.addEventListener("click", function () {
        setAnswerColors("green", "2");
    });

    let buttonFour = document.getElementById("four");
    buttonFour.addEventListener("click", function () {
        setAnswerColors("yellow", "3");
    });
}
//All tiles display a sequence of colours with this function
function squareSequence() {

    //Four random numbers generated
    for (let j = 0; j < NUMBER_OF_COLORS; j++) {
        let numR = Math.floor(Math.random() * NUMBER_OF_COLORS);
        function square() {
            //Random numbers changed to colours
            let color = "yellow";
            if (numR === 0) {
                color = "red";
            } else if (numR === 1) {
                color = "blue";
            } else if (numR === 2) {
                color = 'green';
            }
            //Colours displayed across all tiles of board game
            tileRow = document.getElementsByClassName("main-tile");
            for (let i = 0; i < NUMBER_OF_TILES; i++) {
                tileRow[i].style.backgroundColor = color;
            }
            let time = 500;
            //Check if hard mode button selected
            let hardMode = document.getElementById("hard-mode");
            if (hardMode.style.backgroundColor === "red") {
                time = 100;
            }
            //All tiles of board game turn white in between tiles displaying colours
            setTimeout(function () { squareWhite(); }, time);
        }
        //Delay between display of each sequence colour
        let times = 1000;

        setTimeout(function () { square(); }, times * j);

        // produce array
        var numR0;
        var numR1;
        var numR2;
        if (j === 0) {
            numR0 = numR;
        }
        if (j === 1) {
            numR1 = numR;
        }
        if (j === 2) {
            numR2 = numR;
        }

        let numRandom = [numR0, numR1, numR2, numR];

        //count total number of clicks 'Tap sequence here'
        let button = document.getElementById("sequence");

        count = 1;
        button.onclick = function () {
            count += 1;
        };

        playerTypes();
        //new array
        function lookUp() {

            let colNum1;
            colNum1 = document.getElementById("answer-one");
            let colorNumber1;
            colorNumber1 = colNum1.innerHTML;

            let colNum2;
            colNum2 = document.getElementById("answer-two");
            let colorNumber2;
            colorNumber2 = colNum2.innerHTML;

            let colNum3;
            colNum3 = document.getElementById("answer-three");
            let colorNumber3;
            colorNumber3 = colNum3.innerHTML;

            let colNum4;
            colNum4 = document.getElementById("answer-four");
            let colorNumber4;
            colorNumber4 = colNum4.innerHTML;

            let colNumber1 = Number(colorNumber1);
            let colNumber2 = Number(colorNumber2);
            let colNumber3 = Number(colorNumber3);
            let colNumber4 = Number(colorNumber4);

            function answerboxMessage() {
                let myBox = document.getElementById('answer-box');
                let yourAns = document.getElementById('your-ans');
                if (colNumber1 !== numRandom[0]) {
                    myBox.innerHTML = "You were caught...";
                    yourAns.innerHTML = "1";
                }
                else if (colNumber2 !== numRandom[1]) {
                    myBox.innerHTML = "You were caught...";
                    yourAns.innerHTML = "1";
                }
                else if (colNumber3 !== numRandom[2]) {
                    myBox.innerHTML = "You were caught...";
                    yourAns.innerHTML = "1";
                }
                else if (colNumber4 !== numRandom[3]) {
                    myBox.innerHTML = "You were caught...";
                    yourAns.innerHTML = "1";
                }
                else {
                    myBox.innerHTML = "Well done!";
                    yourAns.innerHTML = "0";
                }
            }
            setTimeout(function () { answerboxMessage(); }, 200);
        }
        let timer = 4000;
        //Check if hard mode button selected

        let hardMode = document.getElementById("hard-mode");
        if (hardMode.style.backgroundColor === "red") {
            timer = 6000;
        }
        setTimeout(function () { lookUp(); }, 10000);

        setTimeout(function () { hideButtons(); }, 500);
        setTimeout(function () { showButtons(); }, timer);

        setTimeout(function () { blankTiles(); }, 11500);
    }
}

function boardGame() {
    let tileStar = document.getElementsByClassName("starry");
    tileStar[24].innerHTML = "";
    let tileShadow = document.getElementsByClassName("main-tile");
    let ans = document.getElementById("your-ans");
    let z = 1000;

    const valueMap = [0, 0, 0, 12000, 12000, 12000, 24000, 24000, 24000, 36000, 36000, 48000, 48000, 48000, 60000, 60000, 72000, 72000, 84000, 84000, 84000, 96000, 96000, 96000, 108000];
    for (let k = 1; k < NUMBER_OF_TILES; k++) {
        const x = valueMap[k];

        setTimeout(() => {

            if (Number(ans.innerHTML) === 1) {

                location.reload();
            }
            const numberIn = [2, 5, 8, 10, 13, 15, 17, 20, 23];
            if (numberIn.includes(k)) {
                squareSequence();
            }

            tileStar[k].innerHTML = `<i class="far fa-star">`;
            if (k > 3) {
                tileShadow[k - 4].style.backgroundColor = 'black';
            }
            if (k > 1) {
                tileStar[k - 1].innerHTML = "";
            }
            if (k === 24) {
                let tally = document.getElementById("games-played");
                tally.innerHTML = "Well played!";
            }
        }, k * z + x);
    }
}
// Hard Mode button changes the timings of the game making it more difficult
let hardMode = document.getElementById("hard-mode");
hardMode.addEventListener("click", function () {
    hardMode.style.backgroundColor = "red";
});

// Reset button refreshes page when clicked
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
    location.reload();
});

// Tally of games won in a row
let playButton = document.getElementById("play");
let amount = 0;
playButton.onclick = function () {
    amount += 1;
    let tallyNumber = amount - 1;
    let tally = document.getElementById("games-played");
    tally.innerHTML = "Games won in a row:" + tallyNumber;
    tally.style.backgroundColor = "yellow";
    tally.style.border = "2px solid black";
};
// Play button function
playButton.addEventListener("click", boardGame);