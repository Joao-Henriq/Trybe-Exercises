function retornaMenorValor(array, resultado){
    array =  [2, 4, 6, 7, 10, 0, -3];
    resultado = array[0];
    for (let i in array){
        if (resultado > array[i]) resultado = i;
    }
    return resultado;
}
console.log(retornaMenorValor());