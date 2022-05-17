// 5-Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.


let angulos = [60, 50, 70];
var somaTriangulo = 0;
for (let i= 0; i < angulos.length; i++) {
    somaTriangulo += angulos[i]; 
}
if (somaTriangulo === 180){
    console.log("Verdadeiro");
} 
else if (somaTriangulo != 180){
    console.log("Falso");
}
else if (somaTriangulo === "?" ) {
    console.log("Erro");
}
else {
}


