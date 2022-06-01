function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function adicionaDiasNaUl(){
    let ulDays = document.getElementById('days')
    for(let i = 0; i < dezDaysList.length ; i++ ){
        let days = dezDaysList[i];
        let diasNaLista = document.createElement('li');
        ulDays.appendChild(diasNaLista);

        diasNaLista.innerText = days;
        if(dezDaysList[i] === 25 || dezDaysList[i] === 24 || dezDaysList[i] === 31){
            diasNaLista.setAttribute('class','day holiday');
        } else {
            diasNaLista.classList.add('day');
        }
        if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25){
            diasNaLista.classList.add('friday');
        }
    }
}
adicionaDiasNaUl();

function criarBotaoFeriados(feriados){
    feriados = 'Feriados';
    
    botao1 = document.createElement('button');
    botao1.setAttribute('id', 'btn-holiday');
    botao1.innerHTML = feriados;

    divContainerBotao = document.querySelector('.buttons-container');
    divContainerBotao.appendChild(botao1);
}
criarBotaoFeriados();

divContainerBotao.addEventListener('click', changeBackground);

function changeBackground(event){
    feriados = document.querySelectorAll('.holiday');
    for(let i = 0; i < feriados.length ; i++){
        feriados[i].style.background = 'rgb(155, 223, 155)';
    }
}

// function zoomEvent(){
//     selecionaLi = document.querySelectorAll('.day');
//     let algumaCoisa = 
//     for[](let i = 0; i < selecionaLi.length ; i++){
//         console.log(selecionaLi[i].innerHTML);
//     }
// }


