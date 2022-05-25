// requisito 1
let pai = document.querySelector('#pai');
let quintoFilhoDoPai = document.createElement('section');
quintoFilhoDoPai.innerHTML = 'Vamos ver se ele é filho da section #pai'
console.log(quintoFilhoDoPai);

pai.appendChild(quintoFilhoDoPai);
quintoFilhoDoPai.setAttribute('id', 'quintofilho');

// requisito 2
let ondeEsta = document.querySelector('#elementoOndeVoceEsta');
let filhoDeOndeEsta = document.createElement('section');
ondeEsta.appendChild(filhoDeOndeEsta);
filhoDeOndeEsta.setAttribute('id', 'terceiroFilho');

// requisito 3
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let FilhoDoCaraDeCima = document.createElement('section');
primeiroFilhoDoFilho.appendChild(FilhoDoCaraDeCima);
FilhoDoCaraDeCima.setAttribute('id', 'requisito3criadocomsucesso');


// requisito 4
console.log(FilhoDoCaraDeCima.parentElement.parentElement.nextElementSibling);