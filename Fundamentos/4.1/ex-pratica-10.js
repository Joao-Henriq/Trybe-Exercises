const custo = 9;
const valorVenda = 120;
const imposto = 0.2
const valorCustoTotal = custo + ( imposto * custo);
let lucro = valorVenda - valorCustoTotal;
if ( custo < 0 || valorVenda < 0 ) console.log('error');
else {
    console.log(`O lucro foi de ${lucro}`);
} 