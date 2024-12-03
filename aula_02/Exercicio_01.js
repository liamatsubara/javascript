const leia = require('readline-sync');

let salario = leia.questionFloat("Digite o Salario: ");
let abono = leia.questionFloat("Digite o Abono: ");
let novoSalario = salario + abono;

console.log(`O seu novo salario é: ${novoSalario}`)
