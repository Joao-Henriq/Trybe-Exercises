let containerHeader = document.getElementById('header-container');
containerHeader.style.backgroundColor = 'rgb(50, 175, 105)';

let emergencyTasks = document.getElementsByClassName('emergency-tasks');
emergencyTasks[0].style.backgroundColor = 'rgb(248, 159, 131)';

let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');
noEmergencyTasks[0].style.backgroundColor = 'rgb(249, 219, 94)';

let emergencyTasksDivs = document.querySelectorAll('.emergency-tasks h3');
emergencyTasksDivs[0].style.backgroundColor = 'blueviolet';
emergencyTasksDivs[1].style.backgroundColor = 'blueviolet';

let noEmergencyTasksDivs = document.querySelectorAll('.no-emergency-tasks h3');
noEmergencyTasksDivs[0].style.backgroundColor = 'black';
noEmergencyTasksDivs[1].style.backgroundColor = 'black';


let footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(11, 53, 51)';
