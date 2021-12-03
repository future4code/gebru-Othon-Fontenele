/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const cartaUser = comprarCarta()
const cartaComp = comprarCarta()

console.log("Bem vindo ao nosso Blackjack!")
   if(confirm("Quer iniciar uma nova rodada?")){
      console.log(`Usuário - ${cartaUser.texto} - Usuário - ${cartaUser.valor}`) 
      console.log(`Computador - ${cartaComp.texto} - Computador - ${cartaComp.valor}`) 
   }
   else{
      console.log("O jogo acabou!")
   }
// Testa os valores das cartas sorteadas.

   if (cartaUser.valor == cartaComp.valor) {
      console.log("Empate!")
   }
   else if (cartaUser.valor > cartaComp.valor) {
      console.log("O usuário ganhou!")
   }
   else if (cartaUser.valor < cartaComp.valor) {
      console.log("O computador ganhou!")
   }    
