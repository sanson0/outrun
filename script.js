function squareWhite() {
  
tileRow = document.getElementsByClassName("main-tile");
  var i;
    for (i=0; i < 25; i++ ) {
   tileRow[i].style.backgroundColor = 'white';
    }
}

function squareSequence() {
var j = 0;
for (let j=0; j < 4; j++) {
let numR = Math.floor(Math.random() * 4);

function square() {
  if (numR === 0) {
tileRow = document.getElementsByClassName("main-tile");
  var i;
    for (i=0; i < 25; i++ ) {
   tileRow[i].style.backgroundColor = 'red';
    }
  }
  else if (numR === 1) {
tileRow = document.getElementsByClassName("main-tile");
  var i;
    for (i=0; i < 25; i++ ) {
    tileRow[i].style.backgroundColor = 'blue';
    }
   } 
   else if (numR === 2) {
   tileRow = document.getElementsByClassName("main-tile");
  var i;
    for (i=0; i < 25; i++ ) {
    tileRow[i].style.backgroundColor = 'green';
    }
   }
   else {
tileRow = document.getElementsByClassName("main-tile");
  var i;
    for (i=0; i < 25; i++ ) {
    tileRow[i].style.backgroundColor = 'yellow';
      }
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

function ansOne() {
  
  var myElement1;
  if (count===1) {
    myElement1 = document.getElementById("answer-one");
} else if (count===2){
    myElement1 = document.getElementById("answer-two");
  } else if (count===3) {
    myElement1 = document.getElementById("answer-three");
} else {
    myElement1 = document.getElementById("answer-four"); 
}
  
  myElement1.style.backgroundColor="red";
  
  myElement1.innerHTML = "0"
}

function ansTwo() {
  
 var myElement2;
  if (count===1) {
    myElement2 = document.getElementById("answer-one");
} else if (count===2){
    myElement2 = document.getElementById("answer-two");
  } else if (count===3) {
    myElement2 = document.getElementById("answer-three");
} else {
    myElement2 = document.getElementById("answer-four"); 
}
  myElement2.style.backgroundColor="blue";
  
  myElement2.innerHTML = "1"
}

function ansThree() {
  
  var myElement3;
  if (count===1) {
    myElement3 = document.getElementById("answer-one");
} else if (count===2){
    myElement3 = document.getElementById("answer-two");
  } else if (count===3) {
    myElement3 = document.getElementById("answer-three");
} else {
    myElement3 = document.getElementById("answer-four"); 
}

  myElement3.style.backgroundColor="green";
  
  myElement3.innerHTML = "2"
}

function ansFour() {
  
 var myElement4;
  if (count===1) {
    myElement4 = document.getElementById("answer-one");
} else if (count===2){
    myElement4 = document.getElementById("answer-two");
  } else if (count===3) {
    myElement4 = document.getElementById("answer-three");
} else {
    myElement4 = document.getElementById("answer-four"); 
}

  myElement4.style.backgroundColor="yellow";
  
  myElement4.innerHTML = "3"
}
//player types in sequence
let buttonOne = document.getElementById("one");
buttonOne.addEventListener("click", ansOne);
let buttonTwo = document.getElementById("two");
buttonTwo.addEventListener("click", ansTwo);
let buttonThree=document.getElementById("three");
buttonThree.addEventListener("click", ansThree);
let buttonFour=document.getElementById("four");
buttonFour.addEventListener("click", ansFour);

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
if (colNumber1 !== numRandom[0]) {
  myBox.innerHTML = "<h1>Better luck next time...</h1>";
}
else if (colNumber2 !== numRandom[1]) {
  myBox.innerHTML = "<h1>Better luck next time...</h1>";
}
else if (colNumber3 !== numRandom[2]) {
  myBox.innerHTML = "<h1>Better luck next time...</h1>";
}
else if (colNumber4 !== numRandom[3]) {
  myBox.innerHTML = "<h1>Better luck next time...</h1>";
}
 else {
  myBox.innerHTML = "<h1>Well done!</h1>";
    
  }
 console.log(numRandom);
 let resultArray = [colNumber1, colNumber2, colNumber3, colNumber4];
console.log(resultArray);
}
setTimeout(function(){lookUp(); }, 10000);
}
}

tileStar = document.getElementsByClassName("starry");
tileShadow = document.getElementsByClassName("main-tile");
for ( let k=1; k < 25; k++ ) {
    var x;
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
 if (k===25) {x=108000;}

  setTimeout(()=>{
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
    tileStar[k].innerHTML = `<i class="far fa-star">`;
    if (k>3) {
        tileShadow[k-4].style.backgroundColor = 'black';
        
    }
    if (k>1) {
       tileStar[k-1].innerHTML = "";
    }
  },k*1000+x);
}