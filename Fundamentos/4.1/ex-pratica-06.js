let peca = 'RAINHA'.toLowerCase();

switch (peca) {
    case 'bispo':{
        console.log('Movimento em diagonais');
        break;
    }
    case 'cavalo':{
        console.log('Movimento em "L"');
        break;
    }
    case 'peao' :{
        console.log('Movimento em vertical ou uma casa diagonal para capturas');
        break;
    }
    case 'peão':{
        console.log('Movimento em vertical ou uma casa diagonal para capturas');
        break;
    }
    case 'rainha':{
        console.log('Movimento em diagonais, linhas horizontais e verticais');
        break;
    }
    case 'rei':{
        console.log('Movimento em todas direções em apenas uma casa');
        break;
    }
    case 'torre':{
        console.log('Movimento em linhas verticais e horizontais');
        break;
    }
    default: {
        console.error('error digite um nome válido de peças do Xadrez');
        break;
    }
}