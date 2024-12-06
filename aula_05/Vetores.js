const leia = require('readline-sync');

let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];

let vetorInteiros = new Array(5);

let vetorNumeros = [7,5,9,1,3,2,6,4,8,10];

/*for(let contador = 0; contador < vetorStrings.length; contador++){
    console.log(vetorStrings[contador]);
}*/

console.log("Tamanho do vetor de strings é: ", vetorStrings.length);

/*for(let contador = 0; contador < vetorInteiros.length; contador++){
    vetorInteiros[contador] = leia.questionInt('Digite um numero: ');
}*/

console.table(vetorInteiros);

console.table(vetorStrings.sort());

console.table(vetorNumeros.sort((a,b) => a-b));
/*a primeiro valor, b segundo valor
arrow function
a-b ordem crescente
faz a ordenação baseado no tamanho total*/

console.log("Existe o numero 2? ", vetorNumeros.indexOf(2));

