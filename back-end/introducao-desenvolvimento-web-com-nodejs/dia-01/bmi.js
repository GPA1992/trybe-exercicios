const imcType = require('./imcType');
const readline = require('readline-sync');

const height = readline.questionFloat('Qual sua altura? ');
const weight = readline.question('Qual seu peso? ');

const imcCalc = (height, weight) => {
    const squareHeight = Math.pow(height, 2)
    const imc = weight/squareHeight;
    /* console.log(`Meu IMC é ${imc.toFixed(2)}`); */
    return Number(imc).toFixed(2);
}


imcCalc(height, weight);
imcType(imcCalc(height, weight))
