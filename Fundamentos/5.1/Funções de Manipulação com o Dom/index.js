// requisito 1
let myParagraphsOfSection = document.getElementsByTagName('p');
myParagraphsOfSection[1].innerText = 'Eu me vejo daqui a 2 anos como um desenvolvedor full stack atuando no mercado de trabalho';

// requisito 2
let myBackgroundOfMainContent = document.getElementsByClassName('main-content');
myBackgroundOfMainContent[0].style.backgroundColor = 'rgb(76,164,109)';

//requisito 3
let centerContent = document.getElementsByClassName('center-content');
centerContent[0].style.backgroundColor = 'white';

// requisito 4
let brokerContentH1 = document.getElementsByClassName('title');
brokerContentH1[0].innerText = 'Exercício 5.1 JavaScript';

// requisito 5
let allparagraphsUpperCase = document.getElementsByTagName('p');
for (let i = 0 ; i < allparagraphsUpperCase.length ; i++) {
    allparagraphsUpperCase[i].style.textTransform = 'uppercase';
}

// requisito 6
function showAllInConsole(text){
    text = document.getElementsByTagName('p');
    for (let i = 0; i < text.length ; i++) {
        console.log(text[i].innerText);
    }
    return text;
}
showAllInConsole();
