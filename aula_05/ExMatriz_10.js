const leia = require('readline-sync');

//linhas
let matrizNotas = Array(10);
let media = Array(10), somaMedia = 0;

//colunas
for(let i = 0; i < matrizNotas.length; i++){
    matrizNotas[i] = Array(4);
}

//preenche a matriz com as notas
for(let i = 0; i < matrizNotas.length; i++){
    console.log(`\nNotas do aluno ${i+1}:`)
    for(let j = 0; j < matrizNotas[i].length; j++){
        matrizNotas[i][j] = leia.questionFloat(`Digite a nota do bimestre ${j+1}: `);
    }
}

//calcula a media de cada aluno
for(let i = 0; i < matrizNotas.length; i++){
    somaMedia = 0; //zera a soma para o proximo aluno
    for(let j = 0; j < matrizNotas[i].length; j++){
        somaMedia += matrizNotas[i][j];
    }

    //armazena o valor da soma e divide pela quantidade de colunas(4) no indice i da media
    media[i] = parseFloat((somaMedia/matrizNotas[i].length).toFixed(1)); 
    
}

console.log("\nA media dos alunos são: ")
console.table(media);