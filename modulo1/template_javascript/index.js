
//1 LEIA O CÓDIGO ABAIXO

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

/*RESPOSTA:
A)
Os valores 2 e 10 serão atribuídos à variàvel e multiplicados por 5.
Resultados 10 e 50 

B)
Não apareceria nada, já que nenhuma ordem seria dada ao console.
*/


//2 LEIA O CÓDIGO ABAIXO

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

/* A.
A função recebe uma entrada de dados do usuário e converte pra letras minúsculas.
Depois verifica se o termo "cenoura" está na entrada de dados e retorna um valor booleano.

B.
As 3 entradas de dados retornarão valor true.
*/

//2. EXERCÍCIOS DE ESCRITA DE CÓDIGO.

//A.
function imprimeNome(){
    console.log('Eu sou Othon, tenho 26 anos e moro em Fortaleza.')
}

imprimeNome()

//B.
const nome = "Othon"
const idade = "27 anos"
const cidade = "Fortaleza"
const profissao = "Estudante"

function informacoes(){
    console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}. `)

}
informacoes()

//2.
//A.
 let numero1 = prompt('Digite o 1 numero')
 let numero2 = prompt('Digite o 2 numero')

function soma(){
    const result = (numero1 + numero2)
    console.log(result)
}
 soma()

//B.
let number1 = prompt('Digite o 1 numero')
let number2 = prompt('Digite o 1 numero')

function soma2(){
    const valorLogico = number1 >= number2
    console.log(valorLogico)

}
soma2()

//C.
let numero = prompt('Digite o numero.')

function par(){
    const testaPar = numero % 2 == 0
    console.log(testaPar)
}
par()

//D.
const mesgm = prompt('Digite a mensagem.')

function tamanho(){
    const imprima = mesgm.toUpperCase().length
    console.log(imprima)

}

tamanho()


//3.
