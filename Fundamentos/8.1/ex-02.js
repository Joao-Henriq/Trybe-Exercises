const checkResult = (num) => num;

const result = (callback) => {
  const numSorteado = Math.round(Math.random() * (5 - 1) + 1);
  return callback === numSorteado ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(result(checkResult(2)));
