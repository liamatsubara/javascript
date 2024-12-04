//5. Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

const leia = require('readline-sync');

console.log("\nBem-vindo! Escolha o produto desejado abaixo: ");
console.log("\n1 - Cachorro Quente");
console.log("2 - X-Salada");
console.log("3 - X-Bacon");
console.log("4 - Bauru");
console.log("5 - Refrigerante");
console.log("6 - Suco de laranja");

let codigo = leia.questionInt("\nDigite o codigo do produto: ");
let quantidade = leia.questionInt("Digite a quantidade desejada: ");
let valor, produto;

switch(codigo){
    case 1:
        produto = "Cachorro Quente";
        valor = 10 * quantidade;
        break;
    case 2:
        produto = "X-Salada";
        valor = 15 * quantidade;
        break;
    case 3:
        produto = "X-Bacon";
        valor = 18 * quantidade;
        break; 
    case 4:
        produto = "Bauru";
        valor = 12 * quantidade;
        break;
    case 5:
        produto = "Refrigerante";
        valor = 8 * quantidade;
        break;
    case 6:
        produto = "Suco de laranja";
        valor = 13 * quantidade;
        break;
    default:
        console.log("Opção inválida! Insira um número entre 1 e 6")
        process.exit(0);
}

console.log(`Produto: ${produto}`);
console.log(`Valor total: R$${valor}`);