//Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta'));

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = document.getElementById('elementoOndeVoceEsta').parentElement;
pai.style.color = 'red';
pai.style.backgroundColor = 'grey'


//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer iss
let primeiroFilho = document.getElementById('primeiroFilhoDoFilho').innerText= "quartou";

//Acesse o primeiroFilho a partir de pai.
console.log(document.getElementById('pai').firstElementChild);

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);


//Agora acesse o terceiroFilho a partir de pai
console.log(document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling);
