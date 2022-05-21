

// cabeeçalho

let cabecalho = document.querySelector('#container #header-container h1');
cabecalho.style.backgroundColor = 'rgb(112,219,147)';

// Urgente
let emergencyTask = document.querySelector('#container .emergency-tasks');
emergencyTask.style.backgroundColor= 'rgb(255, 153, 153)';

let tagH = document.querySelectorAll('#container .emergency-tasks h3');
for (let i= 0; i <tagH.length; i++){
tagH[i].style.color= "white";
tagH[i].style.backgroundColor= "purple"
};

// não urgente

let noEmergencyTask = document.querySelector('#container .no-emergency-tasks');
noEmergencyTask.style.backgroundColor= 'yellow';

let tagHTwo = document.querySelectorAll ('#container .no-emergency-tasks h3');
for (let i= 0; i <tagHTwo.length; i++){
tagHTwo[i].style.color= "white";
tagHTwo[i].style.backgroundColor = "black"
};

// rodapé
let rodape = document.querySelector('#footer-container');
rodape.style.backgroundColor = 'green';



