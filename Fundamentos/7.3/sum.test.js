const sum = require('./sum.js');

describe('Requisito 1', () => {
  it('Verifica se a função sum soma 4 com 5 e resulta em 9', () => {
    expect(9).toBe(sum(4, 5));
  });

  it('Verifica se a função sum soma 0 com  0 resulta em 0', () => {
    expect(0).toBe(sum(0, 0));
  });
  it('Verifica se a função sum retorna Erro quando os parâmetros são 4 e "5"', () => {
    expect( () => {sum(4, "5")}).toThrow();
  });
  it('Verifica se a função sum retorna a mensagem de erro quando os parâmetros são 4 e "5"', () => {
    expect( () => {sum(4, "5")}).toThrowError( new Error('parameters must be numbers'));
  });
});