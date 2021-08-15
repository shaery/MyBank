function makeRed() {
    document.body.style.backgroundColor = 'red';
}


//Blue
const blueButton = document.getElementById('make-button-blue');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


//Anonymous Green function
const greenButton = document.getElementById('make-button-green');
greenButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

//Event listener
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

//function inside addEventListener
const pinkButton = document.getElementById('make-hotpink');
pinkButton.addEventListener('click', function makeHotPink() {
    document.body.style.backgroundColor = 'hotpink';
});

//Direct shortcut
document.getElementById('make-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
});