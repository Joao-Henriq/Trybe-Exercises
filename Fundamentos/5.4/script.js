const background = document.querySelector('.inputBackground');
const colorText = document.querySelector('.inputColors');
const fontSize = document.querySelector('.inputFontsize');
const lineHeight = document.querySelector('.inputLineHeight');
const fontStyle = document.querySelector('.inputFontStyle');
const button = document.querySelector('.button')
const body = document.querySelector('body');

function changeBackground() {
  body.style.background = background.value;
}

function changeColorText() {
  body.style.color = colorText.value;
}

function changeFontSize() {
  body.style.fontSize = `${fontSize.value}px`;
}

function changeLineHeight() {
  body.style.lineHeight = `${lineHeight.value}px`
}

function changefontStyle() {
  body.style.fontStyle = fontStyle.value;
}

button.addEventListener('click', () => {
  changeBackground();
  changeColorText();
  changeFontSize();
  changeLineHeight(); 
  changefontStyle();
});
