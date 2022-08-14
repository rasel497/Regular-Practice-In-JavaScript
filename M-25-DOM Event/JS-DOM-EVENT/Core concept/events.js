// console.log('This is DOM DOM');

// <button onclick="console.log(65)">Another Button</button>

// option:01 directly HTML lekhe diya

// line:19 indexedDB.html

// option:02  add onclick function
// IMPORTANT: We will use this
// <button onclick="makeRed()">Make Red</button>

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option:03  add onclick function
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option:03 another one
const purpleButton = document.getElementById('make-purple');
//console.log(purpleButton); // check console perfectly show or not
purpleButton.onclick =
    function makePurple() {
        document.body.style.backgroundColor = 'purple';
    }

// option:04
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// optioon:04 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() { document.body.style.backgroundColor = 'green' })


// optioon:04 and final we will using
// IMPORTANT: We will use this some times
// document.getElementById('make-goldenrod').addEventListener('click', function () { });
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})



