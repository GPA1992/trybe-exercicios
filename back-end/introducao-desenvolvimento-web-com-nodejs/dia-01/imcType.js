
const imcType = (imc) => {
 if(imc < 18.5 ) return 'abaixo do peso';
 if(imc > 18.5 && imc < 24.9) console.log('peso normal');
 if(imc > 25.0 && imc < 29.9) console.log('acima do peso');
 if(imc > 30 && imc < 34.9) console.log('Obesidade grau I');
 if(imc > 35 && imc < 39.9) console.log('Obesidade grau II');
 if(imc > 40 ) console.log('Obesidade graus III');
}

module.exports = imcType;