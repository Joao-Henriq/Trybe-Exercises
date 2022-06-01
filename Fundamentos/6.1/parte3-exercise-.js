// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', (_event) =>{
    _event.preventDefault();
});

INPUT_CHECKBOX.addEventListener('click', (_event) => {
    _event.preventDefault();
});

INPUT_TEXT.addEventListener('keypress', (_event) => {
    if(_event.key !== 'a' ) _event.preventDefault();

});