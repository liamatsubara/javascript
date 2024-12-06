const leia = require('readline-sync');

let idade,
    genero,
    desenvolvedora,
    continua = 'S',
    backend = 0,
    mCisTransFront = 0,
    hCisTransMobMaior40 = 0,
    nbFullMenor30 = 0,
    pessoas = 0,
    somaIdade = 0;

while(continua === 'S'){
    idade = leia.questionInt("\nIdade: ");
    genero = leia.questionInt("Identidade de genero (1-Mulher Cis/2-Homem Cis/3-Nao Binario/4-Mulher Trans/5-Homem Trans/6-Outros): ");
    desenvolvedora = leia.questionInt("Pessoa desenvolvedora (1-Backend/2-Frontend/3-Mobile/4-FullStack): ");

    if(desenvolvedora === 1){
        backend++;
    }

    if((genero === 1 || genero === 4) && desenvolvedora === 2){
        mCisTransFront++;
    }

    if((genero === 2 || genero === 5) && desenvolvedora === 3 && idade > 40){
        hCisTransMobMaior40++;
    }

    if(genero === 3 && desenvolvedora === 4 && idade < 30){
        nbFullMenor30++;
    }

    pessoas++;
    somaIdade += idade;

    continua = leia.question("Deseja continuar? (S/N) ").toUpperCase();
}

console.log(`\nNumero de pessoas desenvolvedoras Backend: ${backend}`);
console.log(`Numero de Mulheres Cis e Trans desenvolvedoras Frontend: ${mCisTransFront}`);
console.log(`Numero de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${hCisTransMobMaior40}`);
console.log(`Numero de Nao Binarios desenvolvedores FullStack menores de 30 anos: ${nbFullMenor30}`);
console.log(`Numero total de pessoas que responderam à pesquisa: ${pessoas}`);
console.log(`Media de idade das pessoas que responderam à pesquisa: ${Math.floor(somaIdade/pessoas)}`);