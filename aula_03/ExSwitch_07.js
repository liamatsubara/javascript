//Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!

const leia = require('readline-sync');

let n1 = leia.questionFloat("Digite o primeiro numero: ");
let n2 = leia.questionFloat("Digite o segundo numero: ");

console.log("\n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão");
let operacao = leia.questionInt("\nDigite a operacao desejada: ");
let simbolo;

switch(operacao){
    case 1:
        operacao = n1 + n2;
        simbolo = "+"
        break;
    case 2:
        operacao = n1 - n2;
        simbolo = "-"
        break;
    case 3:
        operacao = n1 * n2;
        simbolo = "*"
        break;
    case 4:
        operacao = n1 / n2;
        simbolo = "/"
        break;
    default:
        console.log("Operação Inválida!");
        process.exit(0);
}

console.log(`${n1} ${simbolo} ${n2} = ${operacao}`);
