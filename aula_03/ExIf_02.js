//2. Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:

const leia = require('readline-sync');

let num = leia.questionInt("Digite um numero: ");

if(num % 2 === 0){
    if(num > 0){
        console.log(`O numero ${num} é par e positivo!`);
    }else{
        console.log(`O numero ${num} é par e negativo!`);
    }
}else{
    if(num > 0){
        console.log(`O numero ${num} é impar e positivo!`);
    }else{
        console.log(`O numero ${num} é impar e negativo!`);
    }
}