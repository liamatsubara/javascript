const leia = require('readline-sync')

//dados do usuário

const usuario = 'user@email.com.br'
const senha = 'user1234'
const isAdmin = false
const isGerente = true
const isBlock = false

console.log("\nTela de Login")

let usuarioLogin = leia.question('Digite o seu usuario: ')
let senhaLogin = leia.question('Digite a sua senha: ', {
    hideEchoBack: true,
})

//com let não funcionaria, porque a variável só existe dentro do escopo do laço

if(usuarioLogin === usuario && senhaLogin === senha){
    var mensagem = "Seja Bem-vinde! Usuário autenticado com sucesso!"
}else{
    var mensagem = "Acesso negado!"
}

console.log(mensagem)

//se é true não precisa escrever, é o valor padrão
//! nega o true, então é false
if(!isBlock){
    console.log("Usuário está ativo!")
}else{
    console.log("Usuário está inativo! Contate o Administrador.")
    process.exit(0) //sai do programa, 0 é 'não faça nenhuma pergunta e saia'
}

if(isAdmin || isGerente){
    console.log("Acesso ao painel administrativo liberado.")
}else{
    console.log("Acesso ao Painel Administrativo Negado")
}
