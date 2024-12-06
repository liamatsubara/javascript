const leia = require('readline-sync');

let contador = 11;
let numero = leia.questionInt('Digite um numero: ');


do {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
} while(contador <= 10)