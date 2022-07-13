let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

const list = ['gato', 'água', 'arroz'];
[animal, bebida, comida] = list;
console.log(`${animal} e ${bebida}, ${comida}`);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

 // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
numerosPares = [6, 8, 10, 12];
console.log(numerosPares);