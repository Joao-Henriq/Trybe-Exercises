// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Goiaba', 'Laranja', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Melancia', 'Abacaxi'];

const fruitSalad = (fruit, additional) => {
  const myAllFavoriteFruits = [ ...fruit, ...additional ];
  return myAllFavoriteFruits;
};

console.log(fruitSalad(specialFruit, additionalItens));