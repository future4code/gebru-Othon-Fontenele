// QUESTÃO 1:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//a) Explique o que o código faz. Qual o teste que ele realiza?

/* RESPOSTA
--- O código analisa se determinado numero digitado pelo usuário é par ou ímpar,
se for par, ele imprime "Passou no teste." Se não, "Não passou no teste."
*/

// b) Para que tipos de números ele imprime no console "Passou no teste"?

/* RESPOSTA:
--- Ele imprime para números pares.
*/

// c) Para que tipos de números a mensagem é "Não passou no teste"? 

/* RESPOSTA:
--- Ele imprime para números impares.
*/

/* QUESTÃO 2.
O código abaixo foi feito por uma pessoa desenvolvedora, 
contratada para automatizar algumas tarefas de um supermercado:
*/

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?

/* RESPOSTA:
--- Serve para receber uma entrada de dados sendo uma fruta, em seguida
o código retorna a fruta com seu devido valor.
*/

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

/* RESPOSTA:
--- Serve para receber uma entrada de dados sendo uma fruta, em seguida
o código retorna a fruta com seu devido valor.
*/

/* c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem 
impressa no console se retirássemos o break que está logo acima do default 
(o break indicado pelo comentário "BREAK PARA O ITEM c.")?*/

/*RESPOSTA:
--- Ele retornaria '5', pois não reconheceria a ordem de break.
*/

// QUESTÃO 3.

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?

/* RESPOSTA
--- Declarando uma variável 'numero', solicitando uma entrada de dados 
do usuário.
*/

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

/* RESPOSTA:
--- 10 RESPOSTA SERIA "ESSE NÚMERO PASSOU NO TESTE."
    - 10 RESPOSTA SERIA "ESSA MENSAGEM É SECRETA."
*/

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

/*
--- Sim, haverá erro porque a variável "mensagem" está declarada dentro da condicional "If."
*/


// Exercícios de escrita de código
// QUESTÃO 1.

const idade = Number(prompt("Informe sua idade.")) 
if (idade >= 18){
    console.log("Você pode dirigir")
}
else{
    console.log("Você não pode dirigir.")
}

// QUESTÃO 2.

const turno = prompt('Informe o seu turno.')
if (turno == "matutino"){
    console.log("Bom Dia!")
}
else if (turno == "vespertino"){
    console.log("Boa Tarde!")
}
else if (turno == "noturno"){
    console.log("Boa noite!")
}
else if (turno == "v"){
    console.log("Boa Tarde!")
}

// QUESTÃO 3.

const turno = prompt('Informe o seu turno.')
switch (turno) {
    case 'matutino':
        console.log("Bom Dia!")
        break;
    case 'vespertino':
            console.log("Boa Tarde!!")
        break;
    case 'noturno':
            console.log("Boa noite!")
       break;        
    case 'v':
            console.log("Boa Tarde!!")
       break    

    default:
        break;
}


// QUESTÃO 4.

const filme = prompt('Qual o filme você vai assistir hoje?')
const preço = prompt('Quanto você vai pagar?')

if (filme == "fantasia" && preço < 15){
console.log("Bom filme!")
}
else {
console.log("Escolha outro filme :(")
}


// DESAFIOS.
//QUESTÃO 1.

const filme = prompt('Qual filme você vai assistir hoje?')
const preço = prompt('Quanto você vai pagar?')
const LANCHINHO = prompt('Qual lanchinho vai escolher?')

if (filme == "fantasia" && preço < 15){
console.log("Bom filme!")
console.log(`Aproveite o seu ${LANCHINHO}`)
}
else {
console.log("Escolha outro filme :(")
console.log(`Aproveite o seu ${LANCHINHO}`)
}





