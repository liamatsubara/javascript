const leia = require('readline-sync') //importando a biblioteca para entrada de dados via teclado e armazenando dentro da constante leia

//require - para meu codigo funcionar eu exijo que importe a biblioteca readline sync

let n1, n2;

n1 = leia.questionInt("Digite o primeiro numero: ") //método de leitura para inteiros
n2 = leia.questionInt("Digite o segundo numero: ")

console.log("A variável N1 possui o valor: ", n1)
console.log("A variável N2 possui o valor: ", n2)

console.log("A soma de N1 + N2 é igual a: ", n1 + n2)
console.log("A subtração de N1 - N2 é igual a: ", n1 - n2)
console.log("A multiplicação de N1 * N2 é igual a: ", n1 * n2)
console.log("A divisão de N1 / N2 é igual a: ", n1 / n2)
console.log("A potenciação de N1 ^ N2 é igual a: ", Math.pow(n1, n2))
console.log("A raiz quadrada de N1 é igual a: ", Math.sqrt(n1))

//biblioteca Math têm funções matemáticas


