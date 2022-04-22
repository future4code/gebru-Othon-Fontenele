const alimentos = [
    {nome: ""},
    {volume: ""},
    {preço: ""},
    {dataValidade: ""},
    {quantidade: ""}

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






