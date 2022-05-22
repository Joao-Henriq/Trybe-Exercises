function maiorString(array, maiorString){
    array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
    maiorString = array[0];
    for(let i in array){
        if(array[i].length > maiorString.length) maiorString = array[i];
    }
    return maiorString
}
console.log(maiorString());