let one = document.querySelector('#primeiroFilho').nextElementSibling;
console.log(one);

let two = document.querySelector('#primeiroFilho').parentElement;
two.style.color = 'blue';

let three = document.querySelector('#elementoOndeVoceEsta').firstElementChild;
three.innerText = 'Concluí o exercício 4'

let four = document.querySelector('#pai').firstElementChild;
console.log(four);

let five = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
console.log('Acessando Primeiro filho através de #elementoOndeVoceEsta',five);

let six = document.querySelector('#elementoOndeVoceEsta').nextSibling;
console.log(six.textContent);

let seven = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
console.log(seven);

let eight = document.querySelector('#pai').lastElementChild.previousElementSibling;
console.log(eight);