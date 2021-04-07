let tileRow;
const NUMBER_OF_TILES = 25; // This number represents number of blocks in game.
const NUMBER_OF_COLORS = 4; // This number represents number of colours in sequence.

// All board game tiles are turned white by this function
function squareWhite() {
  
    tileRow = document.getElementsByClassName("main-tile");
  
    for (let index=0; index < NUMBER_OF_TILES; index++ ) {
    tileRow[index].style.backgroundColor = 'white';
    }
}
//All tiles display a sequence of colours with this function
function squareSequence() {

//Four random numbers generated
    for (let j=0; j < NUMBER_OF_COLORS; j++) {
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
//All tiles of board game turn white in between tiles displaying colours
    setTimeout(function(){squareWhite();}, 500);
    }
//Delay between display of each sequence colour
    setTimeout(function(){ square(); }, 1000*j);

    // produce array
    if (j===0) {
        var numR0=numR;
        }
    if (j===1) {
        var numR1=numR;
        }
    if (j===2) {
        var numR2=numR;
        }

    let numRandom = [numR0, numR1, numR2, numR];


    //count total number of clicks 'Tap sequence here'
    let button = document.getElementById("sequence");

    count = 1;
    button.onclick = function() {
        count +=1;
    };
    function setAnswerColors(color, value){
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
    
       let buttonOne = document.getElementById("one");
    buttonOne.addEventListener("click", function () {
    setAnswerColors("red", "0")
    });

    let buttonTwo = document.getElementById("two");
    buttonTwo.addEventListener("click", function () {
    setAnswerColors("blue", "1")
    });
    
    let buttonThree = document.getElementById("three");
    buttonThree.addEventListener("click", function () {
    setAnswerColors("green", "2")
    });

    let buttonFour = document.getElementById("four");
    buttonFour.addEventListener("click", function () {
    setAnswerColors("yellow", "3")
    });

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
    
     setTimeout(function(){lookUp(); }, 10000);
    setTimeout(function(){buttonOne.style.visibility = "hidden"; }, 500);
    setTimeout(function(){buttonTwo.style.visibility = "hidden"; }, 500);
    setTimeout(function(){buttonThree.style.visibility = "hidden"; }, 500);
    setTimeout(function(){buttonFour.style.visibility = "hidden"; }, 500);
    setTimeout(function(){buttonOne.style.visibility = "visible"; }, 4000);
    setTimeout(function(){buttonTwo.style.visibility = "visible"; }, 4000);
    setTimeout(function(){buttonThree.style.visibility = "visible"; }, 4000);
    setTimeout(function(){buttonFour.style.visibility = "visible"; }, 4000);
    let myBox = document.getElementById('answer-box');
    setTimeout(function(){myBox.innerHTML = "";},11500)
    }
}

function boardGame() {
    tileStar = document.getElementsByClassName("starry");
    tileShadow = document.getElementsByClassName("main-tile");
    ans = document.getElementById("your-ans");
    let z=1000;
    
    const valueMap = [0, 0, 0, 12000, 12000, 12000, 24000, 24000, 24000, 36000, 36000, 48000, 48000, 48000, 60000, 60000, 72000, 72000, 84000, 84000, 84000, 96000, 96000, 96000, 108000]
    for ( let k=1; k < NUMBER_OF_TILES; k++ ) {
      const x=valueMap[k];
      
    setTimeout(()=>{

    if (Number(ans.innerHTML)===1) {
   
    location.reload();
    }
    const numberIn = [2, 5, 8, 10, 13, 15, 17, 20 , 23]
      if (numberIn.includes(k)){
          squareSequence();
        }

        amount=0;
        if (k===24) {
        amount +=1;

        let tally= document.getElementById("games-played");
        tally.innerHTML = "Games won in a row:"+ amount;
        tally.style.backgroundColor = "yellow";
        tally.style.border = "2px solid black"
        };
            tileStar[k].innerHTML = `<i class="far fa-star">`;
            if (k>3) {
                tileShadow[k-4].style.backgroundColor = 'black';
            }
            if (k>1) {
                tileStar[k-1].innerHTML = "";
            }
        },k*z+x);
    }
}

let playButton= document.getElementById("play");

playButton.addEventListener("click",boardGame);