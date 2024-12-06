const leia = require('readline-sync');

//linhas
let matriz = Array(3);
let dPrincipal = [], dSecundaria = [], somaDP = 0, somaDS = 0;

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
            somaDP += matriz[i][j];
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