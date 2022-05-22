
function maiorNumeroNoArray(array, resultado){
    array = [2, 3, 6, 7, 10, 1]; 
    resultado = 0;
    for (let i in array){
        if (array[i] >= resultado){
            resultado = array[i];
        }
    }
    return resultado;
}
console.log(maiorNumeroNoArray());