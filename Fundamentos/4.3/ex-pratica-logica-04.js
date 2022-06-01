lista = [];
for (let i = 0; i<=51; i++){
    lista.push(i);
}
let maiorPrimoDaLista = 0;
let listaPrimos =[];
for (let i = 1 ; i < lista.length; i++){
    if(lista[i] % i == 0 && lista[i] % 1 == 0) {
        listaPrimos.push(lista[i]);
        if(lista[i] % 2 == 0 || lista[i] % 3 == 0 || lista[i] % 4 == 0 && lista[i] % 5 == 0 ||lista[i] % 6 == 0  && lista[i] % 7 == 0 || lista[i] % 8 == 0  || lista[i] % 9 == 0 ){
            listaPrimos.pop(lista[i]);
        }
        if(lista[i] === 25 || lista[i] === 35 || lista[i] === 49){
            listaPrimos.pop(lista[i]);
        }
    
    }
}
console.log(listaPrimos);
for (let i2 = 0 ; i2 < listaPrimos.length ; i2++){
    if(listaPrimos[i2] > maiorPrimoDaLista){
        maiorPrimoDaLista = listaPrimos[i2];

    }
}
console.log(maiorPrimoDaLista);

