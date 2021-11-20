// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  // implemente sua lógica aqui
 const altura = prompt('Informe a altura.')
 const largura = prompt('Informe a largura.')

 const area = altura * largura

 console.log(area)


}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual =  prompt('Informe o ano atual')
  const anoNascimento = prompt('Informe seu ano de nascimento.')
  
  idade = anoAtual - anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

    
    return peso / (altura * altura)

    

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  
  const nome = prompt('Informe seu nome:')
  const idade = prompt('Informe sua idade aqui:')
  const email = prompt('Informe seu e-mail aqui:')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

    const array_cor = []
    const cor1 = prompt('Digite a primeira cor')
    const cor2 = prompt('Digite a segunda cor')
    const cor3 = prompt('Digite a terceira cor')

    array_cor.push(`${cor1}`, `${cor2}`, `${cor3}`)
    console.log(array_cor)

  }

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  const frase = string.toUpperCase()
  return frase


}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  

  const receita = custo / valorIngresso
  return receita  



}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const Tamanho1 = string1.length
  const tamanho2 = string2.length

  return (Tamanho1 == tamanho2)
  

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  const lista = prompt('Insira os dados.')
  array.push(lista)
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

    return array[array.length -1]


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 
  primeiro = array[0]
  ultimo = array[array.length -1]
  final = array.slice(`${primeiro}, ${ultimo}`)
  
  return final


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  return (string1 !== string2)


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}