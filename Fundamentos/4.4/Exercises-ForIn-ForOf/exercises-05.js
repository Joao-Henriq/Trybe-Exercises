let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrente = 'Sim';

let info2 = {
    personagem: 'Tio Patinhas',
    origem:"Christmas on Bear Mountain Dell's Four COlor COmics #178",
    nota:"O último MacPatinhas",
}
info2.recorrente = 'Sim';

for(i in info && info2){
    if(info[i] === info2[i]){
        console.log('Ambos recorrentes');
    } else{
        console.log(info[i] + " e " + info2[i]);
    }

}