 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */



    // exercicio - 1 

     
<<<<<<< HEAD
    function changeTagP (text){ 
        let tagEscolhida = document.getElementsByTagName('p');
        tagEscolhida[1].innerText = text;
       }
     changeTagP ("Trabalhando como DEV");
     
         // exercicio 2 - 
     function yellowToGreen (color) {
         let main = document.getElementsByClassName('main-content');
         main[0].style.backgroundColor = color;   
     }
     yellowToGreen ('rgb(102, 255, 102)')
     
           // exercicico 3 - 
     
     function redToWhite (color){
     
         let center = document.getElementsByClassName('center-content');
         center[0].style.backgroundColor = color;  
     }
     redToWhite('white')
         
           // exercicio 4 
     function fixText (text){
     
         document.getElementsByTagName('h1')[0].innerText = text;
     }
     fixText ("Exercício 5.1 - JavaScript - UHUUU");    
         // exercicio 5 -
           
     function upperTag(tag) {
      let upper = document.getElementsByTagName(tag);
         for (let i = 0; i < upper.length; i++){
     
          upper[i].style.textTransform = "uppercase";
     
         }
       }
       upperTag ('p');
     
       // exercicio 6       
       
       
       function showTextTag(tag){
         let showTag = document.getElementsByTagName(tag); 
         for (let i = 0; i< showTag.length; i++){
           var mostrarTexto =  showTag[i].innerText;
         }
         return mostrarTexto
     }
     showTextTag(); 
     
=======
function changeTagP (text){ 
   let tagEscolhida = document.getElementsByTagName('p');
   tagEscolhida[1].innerText = text;
  }
changeTagP ("Trabalhando como DEV");

    // exercicio 2 - 
function yellowToGreen (color) {
    let main = document.getElementsByClassName('main-content');
    main[0].style.backgroundColor = color;   
}
yellowToGreen ('rgb(102, 255, 102)')

      // exercicico 3 - 

function redToWhite (color){

    let center = document.getElementsByClassName('center-content');
    center[0].style.backgroundColor = color;  
}
redToWhite('white')
    
      // exercicio 4 
function fixText (text){

    document.getElementsByTagName('h1')[0].innerText = text;
}
fixText ("Exercício 5.1 - JavaScript - UHUUU");    
    // exercicio 5 -
      
function upperTag(tag) {
 let upper = document.getElementsByTagName(tag);
    for (let i = 0; i < upper.length; i++){

     upper[i].style.textTransform = "uppercase";

    }
  }
  upperTag ('p');

  // exercicio 6       
  
  
  function showTextTag(tag){
    let showTag = document.getElementsByTagName(tag); 
    for (let i = 0; i< showTag.length; i++){
      var mostrarTexto =  showTag[i].innerText;
    }
    return mostrarTexto
}
showTextTag(); 
>>>>>>> 4b904968f393f88bebefbd2fa8793163babb58de
