//1. Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

const leia = require('readline-sync');

let A = leia.questionInt('Digite o numero A: ');
let B = leia.questionInt('Digite o numero B: ');
let C = leia.questionInt('Digite o numero C: ');
let somaAB = A + B;

if(somaAB > C){
    console.log("A soma de A + B é maior do que C")
}else if(somaAB < C){
    console.log("A soma de A + B é menor do que C")
}else{
    console.log("A soma de A + B é igual a C")
}

