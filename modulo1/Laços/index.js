//  Exercícios de interpretação de código
//  1. O que o código abaixo está fazendo? Qual o resultado impresso no console?


/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*/

// Resposta:
// O código irá efetuar a soma de 1 até 4 e irá somar estes números, 
// apresentando o resultado final.

//2. Leia o código abaixo:

/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
*/

// A) O que vai ser impresso no console?
/* RESPOSTA:
Serão impressos todos os números do array que sejam maiores que 18.
*/

//3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/

// Exercícios de escrita de código
//1.
let pets = Number(prompt("Digite a quantidade de Pets."))
let arrayPets = []

if (pets == 0) {
  console.log('Que pena, você pode comprar um pet!')
     
}
else if (pets > 0){
  
for (let numeroDePets = 0; numeroDePets < pets; numeroDePets++) {
  const DePets = prompt("Quais os nomes dos seus Pets?")
  arrayPets.push.toString(numeroDePets)

  }
}
console.log(arrayPets)

