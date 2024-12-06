const leia = require('readline-sync');

let vetorNumeros = [2,5,1,3,4,9,7,8,10,6], encontrado = false;
let nProcurado = leia.questionInt('Digite o numero que voce deseja encontrar: ');

for(let i = 0; i < vetorNumeros.length; i++){
    if(nProcurado === vetorNumeros[i]){
        console.log(`O numero ${nProcurado} esta localizado na posicao: ${vetorNumeros.indexOf(nProcurado)}`);
        encontrado = true;
        break;
    }
};

if(!encontrado){
    console.log("Nao foi encontrado!");
};