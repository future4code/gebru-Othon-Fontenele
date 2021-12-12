// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanhoArray = array.length
   return tamanhoArray
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const arrayInvertido = array.reverse()
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const arrayOrdenado = array.sort((a, b) => a-b)
    return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayDePares = array.filter(pares => (pares %2)== 0)
    return arrayDePares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayDePares = array.filter(pares => (pares %2)== 0)
    const arrayDeElevados = arrayDePares.map(pares => {
        return Math.pow(pares, 2) 
    })
        
    return arrayDeElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const maiorDeTodos = array.reduce(function(a, b) {
        return Math.max(a, b)
    })
    return maiorDeTodos
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
     
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const tresPrimeirosPares = []
   for (let i = 0; tresPrimeirosPares.length < n; i++){
       if(i % 2 === 0){
           tresPrimeirosPares.push(i)
       }
   }
   return tresPrimeirosPares 
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const segundos = array.filter(maiorEmenor => )
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}