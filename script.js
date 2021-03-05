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
}
setTimeout(function(){ square(); }, 1000*j);
console.log(numR);
}
