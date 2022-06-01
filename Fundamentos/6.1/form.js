const INPUT_SUBMIT = document.getElementById('submit');
const BUTTON_CLEAR = document.getElementById('clear');
const ALL_INPUTS = document.getElementsByClassName('input')
INPUT_SUBMIT.addEventListener('click', (event) => {
    event.preventDefault();
})


BUTTON_CLEAR.addEventListener('click', (event) =>{
    ALL_INPUTS.innerHTML = '';
});