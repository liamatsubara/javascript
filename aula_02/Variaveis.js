let nome = "Lia";
let profissao = "Pessoa Desenvolvedora"
let salarioBruto = 3500.44;
const bonus = 0.05;

console.log("Nome: ", nome)
console.log("\nProfissão: ", profissao)

//intl formata em forma de moeda

console.log('Salário liquido: ', new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL',}).format(salarioBruto + (bonus * salarioBruto)) );

//interpolação de string - acento da crase e variáveis dentro das chaves com cifrão na frente

console.log(`\nO salário bruto do colaborador ${nome} é ${salarioBruto}`)




// console.log(
//     "Salário Liquido: ",
//     new Intl.NumberFormat('pt-BR', {
//         style: 'current',
//         currency: 'BRL',
//     }).format(salarioBruto + (bonus * salarioBruto))
// )




// nome = 12
// console.log("\nNome: ", nome)
// console.log("\nTipo da variável:", typeof nome)
//seleciona ctrl + ; comenta o codigo



