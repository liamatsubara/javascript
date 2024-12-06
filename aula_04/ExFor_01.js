//1. Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. Veja os exemplos abaixo:

const leia = require('readline-sync');

let n1 = leia.questionInt('Digite o primeiro numero do intervalo: ');
let n2 = leia.questionInt('Digite o segundo numero do intervalo: ');

if(n1 < n2){
    for(let i = n1; i <= n2; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(`${i} é multiplo de 3 e 5`);
        }
    }

}else{
    console.log("Intervalo Invalido!");
    process.exit(0);
}

/*
8 - condição que verifica se n1 é menor que n2
9 - loop que verifica o intervalo entre n1 e n2
10 - condição que verifica se é multiplo de 3 e 5
*/