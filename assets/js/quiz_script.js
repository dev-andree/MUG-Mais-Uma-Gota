let banho = window.document.getElementById("banho")
let roupa = window.document.getElementById("roupa")
let casaagua = window.document.getElementById("casaagua")
let louca = window.document.getElementById("louca")
let enviar = window.document.getElementById("enviar")
let resposta = window.document.getElementById("resposta")
let total = window.document.getElementById("total")

enviar.addEventListener('click', clicar)

function clicar(){
    let banhoValue = Number(banho.value)
    let roupaValue = Number(roupa.value)
    let casaaguaValue = Number(casaagua.value)
    let loucaValue = Number(louca.value)

    if (isNaN(banhoValue) || isNaN(roupaValue) || isNaN(casaaguaValue) || isNaN(loucaValue)) {
        window.alert("Insira valores válidos")
    }

    let valorUsuarioBanho = banhoValue * 9 * 7
    let valorUsuarioRoupa = roupaValue * 70
    let valorUsuarioCasaagua = casaaguaValue * 100
    let valorUsuarioLouca = loucaValue * 8

    let valorTotalUsuario = valorUsuarioBanho + valorUsuarioRoupa + valorUsuarioCasaagua + valorUsuarioLouca

    alert(`${valorTotalUsuario}`)


    resposta.innerHTML = `Seu gasto semanal tomando banho é de <b>${valorUsuarioBanho}</b><br>
    Seu gasto semanal lavando roupa é de <b>${valorUsuarioRoupa}</b><br>
    Seu gasto semanal lavando a casa é de <b>${valorUsuarioCasaagua}</b><br>
    Seu gasto semanal lavando louça é de <b>${valorUsuarioLouca}</b><br>
    Total: ${valorTotalUsuario}`

    if (valorTotalUsuario >= 350 && valorTotalUsuario <= 700) {
        total.innerHTML = `Consumo Baixo`
    }

    if (valorTotalUsuario >= 700 && valorTotalUsuario <= 1400) {
        total.innerHTML = `Consumo Moderado`
    }

    if (valorTotalUsuario >1400) {
        total.innerHTML = `Consumo Alto`
    }
}