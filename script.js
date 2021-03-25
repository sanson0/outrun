let tileRow;
const NUMBER_OF_TILES = 25; // This number represents number of blocks in game.
const NUMBER_OF_COLORS = 4; // This number represents number of colours in sequence.
function squareWhite() {
  
tileRow = document.getElementsByClassName("main-tile");
  
    for (let index=0; index < NUMBER_OF_TILES; index++ ) {
   tileRow[index].style.backgroundColor = 'white';
    }
}
function squareSequence() {
var j = 0;
for (let j=0; j < NUMBER_OF_COLORS; j++) {
let numR = Math.floor(Math.random() * NUMBER_OF_COLORS);

function square() {
let color = "yellow";

      if (numR === 0) {
            color = "red";
      } else if (numR === 1) {
            color = "blue";
      } else if (numR === 2) {
        color = 'green';
      } 
        tileRow = document.getElementsByClassName("main-tile");
        for (let i = 0; i < NUMBER_OF_TILES; i++) {
            tileRow[i].style.backgroundColor = color;
        }
setTimeout(function(){squareWhite();}, 500);
}
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

var numRandom = [numR0, numR1, numR2, numR];


//count total number of clicks
var button = document.getElementById("sequence");

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
    buttonOne.addEventListener("click", function(){
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

myElementA = document.getElementById("answer-one");
let colorNumber1 = myElementA.innerHTML;

myElementB = document.getElementById("answer-two");
let colorNumber2 = myElementB.innerHTML;

myElementC = document.getElementById("answer-three");
let colorNumber3 = myElementC.innerHTML;

myElementD = document.getElementById("answer-four");
let colorNumber4 = myElementD.innerHTML;


let colNumber1 = Number(colorNumber1);
let colNumber2 = Number(colorNumber2);
let colNumber3 = Number(colorNumber3);
let colNumber4 = Number(colorNumber4);

let myBox = document.getElementById('answer-box');
let yourAns = document.getElementById('your-ans');
if (colNumber1 !== numRandom[0]) {
  myBox.innerHTML = "<h1>Better luck next time...</h1>";
 yourAns.innerHTML = "1";
}
else if (colNumber2 !== numRandom[1]) {
  myBox.innerHTML = "<h1>Better luck next time...</h1>";
 yourAns.innerHTML = "1";
}
else if (colNumber3 !== numRandom[2]) {
  myBox.innerHTML = "<h1>Better luck next time...</h1>";
  yourAns.innerHTML = "1";
}
else if (colNumber4 !== numRandom[3]) {
  myBox.innerHTML = "<h1>Better luck next time...</h1>";
  yourAns.innerHTML = "1";
}
 else {
  myBox.innerHTML = "<h1>Well done!</h1>";
  }
  


 console.log(numRandom);
 let resultArray = [colNumber1, colNumber2, colNumber3, colNumber4];
console.log(resultArray);
}
setTimeout(function(){lookUp(); }, 10000);
let myBox = document.getElementById('answer-box');
setTimeout(function(){myBox.innerHTML = "";},11500)
}
}

function boardGame() {
tileStar = document.getElementsByClassName("starry");
tileShadow = document.getElementsByClassName("main-tile");
ans = document.getElementById("your-ans");
let z=1000;
//const valueMap = [undefined,0, 0, 12000, 12000, 12000, 24000, 24000, 24000, 36000, 36000, 48000, 48000, 48000, 6000, 6000, 72000, 72000, 84000, 84000, 84000, 96000, 96000, 108000, 108000]
for ( let k=1; k < NUMBER_OF_TILES; k++ ) {
  //  const x=valueMap[k];
  if (k===1) {x=0;}
 if (k===2) {x=0;}
 if (k===3) {x=12000;}
 if (k===4) {x=12000;}
 if (k===5) {x=12000;}
 if (k===6) {x=24000;}
 if (k===7) {x=24000;}
 if (k===8) {x=24000;}
 if (k===9) {x=36000;}
 if (k===10) {x=36000;}
 if (k===11) {x=48000;}
 if (k===12) {x=48000;}
 if (k===13) {x=48000;}
 if (k===14) {x=60000;}
 if (k===15) {x=60000;}
 if (k===16) {x=72000;}
 if (k===17) {x=72000;}
 if (k===18) {x=84000;}
 if (k===19) {x=84000;}
 if (k===20) {x=84000;}
 if (k===21) {x=96000;}
 if (k===22) {x=96000;}
 if (k===23) {x=96000;}
 if (k===24) {x=108000;}
setTimeout(()=>{

if (Number(ans.innerHTML)===1) {
   
   location.reload();
}
//const numberIn = [2, 5, 8, 10, 13, 15, 17, 20, 23];
//if(numberIn.contains(k)){
 //         squareSequence();
  //    }
    if (k===2) {
    squareSequence();
    }
     if (k===5) {
    squareSequence();
    }
    if (k===8) {
    squareSequence(); 
    }
    if (k===10) {
    squareSequence(); 
    }
    if (k===13) {
    squareSequence(); 
    }
    if (k===15) {
    squareSequence(); 
    }
    if (k===17) {
    squareSequence(); 
    }
    if (k===20) {
    squareSequence(); 
    }
    if (k===23) {
    squareSequence(); 
    }
amount=0;
if (k===24) {
  amount +=1;

let tally= document.getElementById("games-played");
tally.innerHTML = "games won in a row:"+ amount;
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