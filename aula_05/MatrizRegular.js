//primeiro cria a estrutura de fora, depois a de dentro

const leia = require('readline-sync');
let matrizInteiros = new Array(3); //cria 3 linhas

//cria as 3 colunas dentro das 3 linhas
for (let indice = 0; indice < matrizInteiros.length; indice++){
    matrizInteiros[indice] = Array(3);
}

//percorrendo a matriz e preenchendo com dados
for(let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for(let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){
        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt('Digite um numero: ');
    }
}

console.table(matrizInteiros);