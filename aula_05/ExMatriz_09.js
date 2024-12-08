/*Elabore um algoritmo que leia uma Matriz 3×3 de númer	os inteiros e em seguida, mostre na tela:
Todos os elementos da Diagonal Principal
Todos os elementos da Diagonal Secundária
A Soma de todos os elementos da Diagonal Principal
A Soma de todos os elementos da Diagonal Secundária*/

const leia = require('readline-sync');
let dPrincipal = [], dSecundaria = [], somaDP = 0, somaDS = 0;

//linhas
let matriz = Array(3);

//colunas
for(let i = 0; i < matriz.length; i++){
    matriz[i] = Array(3);
}

//preencher
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
        matriz[i][j] = leia.questionInt('Digite um numero: ');
    }
}

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
        if(i === j){
            dPrincipal[i] = matriz[i][j];
            somaDP = somaDP + matriz[i][j];
        }
        if(i + j === 2){
            dSecundaria[i] = matriz[i][j];
            somaDS += matriz[i][j];
        }
    }
}

console.log(`\nElementos da diagonal principal: ${dPrincipal}`);
console.log(`Elementos da diagonal secundaria: ${dSecundaria}`);
console.log(`Soma dos elementos da diagonal principal: ${somaDP}`);
console.log(`Soma dos elementos da diagonal secundaria: ${somaDS}`);