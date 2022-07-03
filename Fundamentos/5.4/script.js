const background = document.querySelector('.inputBackground');
const colorText = document.querySelector('.inputColors');
const fontSize = document.querySelector('.inputFontsize');
const lineHeight = document.querySelector('.inputLineHeight');
const fontStyle = document.querySelector('.inputFontStyle');
const button = document.querySelector('.button')
const body = document.querySelector('body');

const settings = {
  background: body.style.background = background.value,
  color: body.style.color = colorText.value,
  fontSize: body.style.fontSize = `${fontSize.value}px`,
  lineheight: body.style.lineHeight = `${lineHeight.value}px`,
  fontStyle: body.style.fontStyle = fontStyle.value
};
// function changeBackground() {
//   body.style.background = background.value;
// }

// function changeColorText() {
//   body.style.color = colorText.value;
// }

// function changeFontSize() {
//   body.style.fontSize = `${fontSize.value}px`;
// }

// function changeLineHeight() {
//   body.style.lineHeight = `${lineHeight.value}px`
// }

// function changefontStyle() {
//   body.style.fontStyle = fontStyle.value;
// }

button.addEventListener('click', () => {
  for (let key in settings) {
    console.log(settings[key]);
  }
});

localStorage.setItem('background', JSON.stringify(`${background.value}`));
localStorage.setItem('color', JSON.stringify(`${colorText.value}`));
localStorage.setItem('fontsize', JSON.stringify(`${fontSize.value}`));
localStorage.setItem('lineheight', JSON.stringify(`${lineHeight.value}`));
localStorage.setItem('fontstyle', JSON.stringify(`${fontStyle.value}`));

localStorage.getItem('color');