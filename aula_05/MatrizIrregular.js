//primeiro cria a estrutura de fora, depois a de dentro

const leia = require('readline-sync');
let matrizInteiros = new Array(2); //cria 2 linhas

//cria as 3 colunas dentro das 2 linhas
for (let indice = 0; indice < matrizInteiros.length; indice++){
    matrizInteiros[indice] = Array(3);
}

//percorrendo a matriz e preenchendo com dados
for(let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for(let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++){
        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt('Digite um numero: ');
    }
}

console.table(matrizInteiros);

//matriz irregular, o loop de dentro tem que ser ajustado, linha 13, indiceLinha
//pegando o tamanho da linha, que é 3