// 6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

let pecaXadrez ="Rainha".toLowerCase();

switch (pecaXadrez) {
    case "peão":
    console.log("Uma casa pra frente e come na diagonal");
    break;

    case "rainha":
        console.log("Anda pra todas as direções quantas casas quiser");
        break;

    default:
        console.log("Não achou");    







}


