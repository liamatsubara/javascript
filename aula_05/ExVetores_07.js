//Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela. Veja os exemplos abaixo:

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