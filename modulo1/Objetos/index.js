// EXERCÍCIOS DE INTERPRETAÇÃO

// QUESTÃO 1.
//A) O QUE SERÁ IMPRESSO NO CONSOLE?

/* RESPOSTA:
Será impresso o nome do primeiro integrante do elenco, o tamanho 
no array e a última posição do array "transmissoesHoje".
*/

// QUESTÃO 2.  
/* A) O QUE SERÁ IMPRESSO NO CONSOLE?
    Será impresso todos os dados contidos nos três objetos 
    sequencialmente.

  B) A sintaxr dos três pontos indica que o objeto ali declarado é uma cópia de 
  outro posterior aos 3 pontos.

*/

// QUESTÃO 3.
function minhaFuncao(objeto, propriedade) {
 	return objeto[propriedade]
}

const pessoa = {
   nome: "Caio", 
   idade: 23, 
   backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//A. O QUE VAI SER IMPRESSO NO CONSOLE?
/* Será impresso 'false' e "undefined". */

//B. Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Porque o valor da chave "altura" não foi declarado, nem a referida chave.

 const person = {
     nome: 'Othon',
     apelidos: ['abras', 'orelinha', 'pitbull']
 }

 function imprime(person) {
 console.log(`Eu sou ${person.nome}, mas pode me chamar de ${person.apelidos[0]}, 
 ${person.apelidos[1]} ou ${person.apelidos[2]}`)

}



//Item B.
 const people = {
     ...person,
     apelidos: ['Não sei', 'Acho que', 'Não tenho']
 }

imprime(people)

 const informacoes = {
     nome: 'Othon', 
     idade: '27 anos',
     profissao: 'Suporte Remoto'
    
}

 function minhasInformaçoes (informacoes) {
     const array = [`${informacoes.nome}`, `${informacoes.nome.length}`, `${informacoes.idade}`, `${informacoes.profissao}`, 
 `${informacoes.profissao.length}`]

 console.log(array) 

 }

 minhasInformaçoes(informacoes)

const carrinho = []

const fruta1 = {
    nome: "maçã",
    disponivel: true}

const fruta2 = {
    nome: "pera",
    disponivel: true}


const fruta3 = {
    nome: "uva",
    disponivel: true}

function compras() {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
    
    console.log(carrinho)
}

compras()