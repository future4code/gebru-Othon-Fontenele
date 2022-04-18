
	*** Exercício 1 ***

```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
   const salario = 2000 + (valorTotalVendas * 5/100) +
   (qtdeCarrosVendidos * 100)
   
    return salario```
} 

*************************************************************


	*** Exercício 2 ***

```javascript
function calculaPrecoTotal (quantidade) {
  
  
  if (quantidade < 12 ) {
    preco = 1.3
  }
  else if (quantidade >= 12) { 
    preco = 1 
  }
  const precoFinal = quantidade * preco
  
  return precoFinal
}```

*************************************************************


	*** Exercício 3 ***



```javascript
function calculaNota(ex, p1, p2) {
  const nota = (ex + p1 + p2) / 3 
  const conceito =""
  
  if(nota >= 9){
    conceito = "A"
  }
  else if (nota < 9 && >= 7,5) {
    conceito = "B"   
  }
  else if (nota < 7,5 && >= 6) {
    conceito = "C"
  }
  else if (nota < 6) {
    conceito = "D"
  }
 
  return conceito
}```


// *************************************************************


	*** Exercício 4 ***


// *************************************************************


	// *** Exercício 5 ***

```javascript
    function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

    const nomesAnimais = animais.map((item) => {
      return item.nome;
    })
    return nomesAnimais
}```

*************************************************************


	*** Exercício 6 ***

``` javascript 
    function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]

    const terminadas = tarefas.filter((tarefa) => {
      return tarefa.status === 'done'
    })
    const terminadasTitulo = terminadas.map((item) => {
      return item.titulo
    })
    return terminadasTitulo
}```


