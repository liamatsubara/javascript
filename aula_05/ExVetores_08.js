/*Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:
Todos os elementos dos índices ímpares do vetor 
Todos os elementos do vetor que são números pares
A Soma de todos os elementos do vetor
A Média de todos os elementos do vetor, armazenada em uma variável do tipo real
*/

const leia = require('readline-sync');
let vetor = new Array(10), vImpar = [], vPar = [], somaVetor = 0, media = 0;


for(let i = 0; i < vetor.length; i++){
    vetor[i] = leia.questionInt("Digite um numero: ");
   
    if(i % 2 != 0){
        vImpar.push(vetor[i]);
    }

    if(vetor[i] % 2 === 0){
        vPar.push(vetor[i]);
    }

    somaVetor += vetor[i];
}

console.log(`\nElementos nos indices impares: ${vImpar}`);
console.log(`Elementos pares: ${vPar}`);
console.log(`Soma: ${somaVetor}`);
console.log(`Media: ${somaVetor/vetor.length}`);



