window.onload = document.querySelector('.black').classList.add('selected');

const colorPalette = document.querySelectorAll('.color');
const black = document.querySelector('.black');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const pixels = document.querySelectorAll('.pixel');
const color = ['black', 'blue', 'red', 'yellow'];

function colorSelected(event) {
  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

black.addEventListener('click', colorSelected);
red.addEventListener('click', colorSelected);
yellow.addEventListener('click', colorSelected);
blue.addEventListener('click', colorSelected);

function clean() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clean);
