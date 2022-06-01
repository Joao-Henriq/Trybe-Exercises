/*
Output
    *
   **
  ***
 ****
*****

*/
let n = 10;
let simbolo = '*';
let linhaDeEntrada = '';
let posicaoDeEntrada = n;

for(let iLinha = 0 ; iLinha < n ; iLinha++){
    for(let iColuna = 0 ; iColuna <=n ; iColuna++){
        if(iColuna < posicaoDeEntrada){
            linhaDeEntrada = linhaDeEntrada + ' ';
        }
        else if (iColuna > posicaoDeEntrada){
            linhaDeEntrada = linhaDeEntrada + simbolo;
        }
    } 
    console.log(linhaDeEntrada);
    linhaDeEntrada = '';
    posicaoDeEntrada--;
}

