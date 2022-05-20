let paragraph = document.getElementsByClassName("paragraph");

paragraph[0].innerHTML = "PARAGRAFOS ALTERADOS COM CLASSNAME";
paragraph[1].innerHTML = "Paragrafo2 alterado com classname";
paragraph[0].style.color = "red";
paragraph[1].style.color = "blue";

let subtitle = document.getElementsByTagName("h4");
subtitle[0].innerText = "SUBTÍTULO ALTERADO COM TAGNAME"
subtitle[0].style.color = "orange";