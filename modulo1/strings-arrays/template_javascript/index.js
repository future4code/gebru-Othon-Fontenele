
/*EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS */

//1.  Indique todas as mensagens impressas no console

let array
console.log('a. ', array)
//Faz a declaração do array

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// Exibe o tamanho (quantidade de elementos) do array.

let i = 0
console.log('d. ', array[i])
// Inicializa o array com valor 0.

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)
//Soma o valor do array mais seis.





//2. Leia o código abaixo com atenção.

const frase = prompt("Digite uma frase")
// Abre janela pedindo uma entrada de dados do usuário (Digite a frase).

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Converte a frase digitada para maiúscula e informa o tamanho da frase.



/*Exercícios de escrita de código*/
//1.
const emailDoUsuario = prompt('Informe seu e-mail')
const nomeDoUsuario = prompt('Informe seu nome:')

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)



//2.
//A.
const comidas = ["Macarronada", "Churrasco", "Cará", "Baião", "Pizza" ]
console.log(comidas)

//B.
console.log("Essas são as minhas comidas preferidas ")
console.log(`${comidas[0]}`)
console.log(`${comidas[1]}`)
console.log(`${comidas[2]}`)
console.log(`${comidas[3]}`)
console.log(`${comidas[4]}`)

//C.
const favorita = prompt('Qual sua comida favorita?')
comidas[1] = `${favorita}`
console.log(comidas) 


//3.
//A.
const listaDeTarefas = []

//B.
const tarefa1 = prompt('Informe uma tarefa diária.')
const tarefa2 = prompt('Informe outra tarefa diária.')
const tarefa3 = prompt('Informe outra tarefa diária.')

listaDeTarefas.push(`${tarefa1}`, `${tarefa2}`, `${tarefa3}` )

//C.
console.log(listaDeTarefas)

//D. 
const indice = prompt('Informe um número de 0 a 2')
//E.
const tarefas = listaDeTarefas.splice(indice,1)
//F.
console.log(listaDeTarefas)

