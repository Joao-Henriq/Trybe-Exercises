const INPUT_SUBMIT = document.getElementById('submit');
const BUTTON_CLEAR = document.getElementById('clear');
const ALL_INPUTS = document.getElementsByClassName('input');
const INPUT_EMAIL = document.getElementById('inputEmail');
const INPUT_NAME = document.getElementById('inputName');
const INPUT_WHY = document.getElementById('motivo');
const INPUT_NECESSARY = document.getElementById('necessary');


INPUT_SUBMIT.addEventListener('click', (event) => {
    if(INPUT_NECESSARY.value === 'on') {
        if((INPUT_EMAIL.m > 40) && (INPUT_EMAIL.minLength < 10)){
            alert('dados inválidos')
        } else if ((INPUT_NAME.maxLength > 40) && (INPUT_NAME.minLength < 10)){
            alert('dados inválidos');
        } else if ((INPUT_WHY.maxLength > 500)) {
            alert('dados inválidos');
        } else {
            alert('Dados enviados con sucesso, obrigado por participar do concurso trybe trip')
        }
    } else {
        alert('Você não pode enviar seus dados');
    }
})


BUTTON_CLEAR.addEventListener('click', (event) =>{
    ALL_INPUTS.innerHTML = '';

});