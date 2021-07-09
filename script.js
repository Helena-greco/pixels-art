window.onload = function load() {
  document.querySelector('.black').classList.add('selected');
};

const colorPalette = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const black = document.querySelector('.black');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

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
