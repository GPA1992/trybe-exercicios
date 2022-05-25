//1- 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let corpo = document.querySelector('body');
let tagCriada = document.createElement('h1');
tagCriada.innerText = 'Exercício 5.2 - JavaScript DOM';
tagCriada.className = 'title' // 1 novas alterações
corpo.appendChild(tagCriada);

//2- 🚀Adicione a tag main com a classe main-content como filho da tag body;

let main = document.createElement('main');
main.className = 'main-content';
corpo.appendChild(main);

//3- 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

//3 -> 5 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

let mainContent = document.querySelector('.main-content');
mainContent.style.backgroundColor = 'purple';



//4- 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let tagParagraph = document.createElement('p');
tagParagraph.innerText = "Quarta feira de projeto, uhuuu"
section.appendChild(tagParagraph)

//5- 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sectionTwo = document.createElement('section');
sectionTwo.className = 'left-content';
main.appendChild(sectionTwo);

//6- 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sectionThree = document.createElement('section');
sectionThree.className = 'right-content';
main.appendChild(sectionThree);

// 6-4 >🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
let rightContent = document.querySelector('.right-content')

rightContent.style.marginRight = 'auto';


//7-🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
imagem.className = 'small-image';
sectionTwo.appendChild(imagem);

//8- 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let numeros = [
'um',
'dois',
'três',
'quatro',
'cinco',
'seis',
'sete',
'oito',
'nove',
'dez',
];

for (let i= 0; i < numeros.length; i += 1) {
   let numeros2 = numeros[i];

    let lista = document.createElement('li');
    lista.innerText = numeros2;
    lista.className ='numeros-listados'
    sectionThree.appendChild(lista);
};

//8 -> 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
let rightContentTwo = document.querySelector('.right-content');

let numberList = document.querySelectorAll('.numeros-listados');

for (let i = 0; i < numberList.length; i+= 1) {
    let numbers = numberList[i];
    console.log(numbers);
    if (numbers.innerText.includes('nove')) {
        rightContentTwo.removeChild(numbers);
    }
    if (numbers.innerText.includes('dez')) {
        rightContentTwo.removeChild(numbers);
    }

}







//9 -🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

let tagH3 = document.createElement('h3');
tagH3.className = 'description';
let tagH3Two = document.createElement('h3');
tagH3Two.className = 'description';
let tagH3Three = document.createElement('h3');
tagH3Three.className = 'description';
main.appendChild(tagH3);
main.appendChild(tagH3Two);
main.appendChild(tagH3Three);
;


/// ______________ //

//3 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

let leftContent = document.querySelector('.left-content');

main.removeChild(leftContent);

//4- 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;






