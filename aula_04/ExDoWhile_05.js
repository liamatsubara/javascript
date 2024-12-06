//5. Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos.

const leia = require('readline-sync');

let positivos = 0, num;

do{
    num = leia.questionInt('Digite um numero: ');
    if(num > 0){
        positivos = positivos + num;
    }
}while(num != 0)

console.log(`A soma dos numeros positivos é: ${positivos}`)