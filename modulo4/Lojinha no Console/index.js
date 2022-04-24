const alimentos = [
    {nome: "Feijao"},
    {volume: "3"},
    {preço: "2,50"},
    {dataValidade: "20/10/2025"},
    {quantidade: "10"}

]

const brinquedos = [
    {Nome: ""},
    {classificacao: ""},
    {preço: ""},
    {quantidade: ""}

]
const inicio = () => {
    const a = prompt("O que você procura?","vitrine, compra ou zerar estoque.");


        if (a == "vitrine") {
            const a2 = prompt("Você deseja alimentos ou brinquedos?")
            if (a2 == "alimentos") {
                console.log(alimentos)
            }
            else if (a2 == "brinquedos") {
                console.log(brinquedos)
            }
            
        }
        else if (a == "compra") {
            const compra = prompt("Qual tipo de produto deseja comprar?")
                if (compra == "alimentos" || compra == "brinquedos") {
                    const produto = prompt("Qual o produto?")
                   
                        console.log(alimentos.find((element) => { element == produto
                        }))
                    
                }
                else {
                    window.alert("Por favor, digite apenas Alimentos ou brinquedos.")
                }
        }
}
inicio();

const questiona = () => {
    const b = confirm("Você deseja ver outros produtos?")
        if (b == false) {
            document.write("Operação cancelada.")
        }
        else {
            inicio()
        }

}
questiona();






