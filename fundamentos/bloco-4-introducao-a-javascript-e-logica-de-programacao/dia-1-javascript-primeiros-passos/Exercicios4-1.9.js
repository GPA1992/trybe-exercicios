//9-Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.


const num1 = 7;
const num2 = 3;
const num3 = 5;
      
    if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0){
        console.log(true);
    }
    else{
        console.log(false);
    }



const num = [7, 4, 5]
let result = num.some(item => item % 2 === 0);
   if("Par"){
       console.log(num.some(item => item % 2 === 0));
   }
   else{
       console.log(num.some(item => item % 2 != 0));
   }


