let banho = window.document.getElementById("banho")
let roupa = window.document.getElementById("roupa")
let casaagua = window.document.getElementById("casaagua")
let louca = window.document.getElementById("louca")
let enviar = window.document.getElementById("enviar")
let resposta = window.document.getElementById("resposta")
let consumo = window.document.getElementById("consumo")
let sugestao = window.document.getElementById("sugestao")

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

    resposta.innerHTML = `Seu gasto semanal tomando banho é de: <b>${valorUsuarioBanho}L</b><br>
    Seu gasto semanal lavando roupa é de: <b>${valorUsuarioRoupa}L</b><br>
    Seu gasto semanal lavando a casa é de: <b>${valorUsuarioCasaagua}L</b><br>
    Seu gasto semanal lavando louça é de: <b>${valorUsuarioLouca}L</b><br><br>
    <b>Total: ${valorTotalUsuario}L</b>`

    if (valorTotalUsuario <= 350 && valorTotalUsuario <= 700) {
        consumo.innerHTML = '<b>Consumo Baixo</b>'
        sugestao.innerHTML += "<b>Dica:</b> Continue monitorando seu consumo de água e procurando novas formas de economizar, como instalar arejadores nas torneiras e reusar água da lavagem de vegetais para regar plantas.<br><br>"
        sugestao.innerHTML += "<b>Mensagem:</b> Parabéns! Você está fazendo um excelente trabalho em economizar água. Continue assim e inspire outros a seguir seu exemplo!"
    }

    if (valorTotalUsuario >= 700 && valorTotalUsuario <= 1400) {
        consumo.innerHTML = '<b>Consumo Moderado</b>'
        sugestao.innerHTML += "<b>Dica:</b> Considere adotar hábitos simples para reduzir ainda mais o consumo, como tomar banhos mais curtos, consertar vazamentos rapidamente e usar a máquina de lavar roupas com carga cheia. <br><br>"
        sugestao.innerHTML += "<b>Mensagem:</b> Você está no caminho certo, mas ainda pode melhorar. Tome mais cuidado com o uso da água e implemente pequenas mudanças no dia a dia para fazer a diferença."
    }

    if (valorTotalUsuario >= 1400) {
        consumo.innerHTML = '<b>Consumo Alto</b>'
        sugestao.innerHTML += "<b>Dica:</b> É crucial reduzir o consumo de água urgentemente. Reavalie seus hábitos diários e identifique áreas onde pode economizar, como diminuir o tempo de banho, evitar lavar calçadas com mangueira e optar por eletrodomésticos mais eficientes. <br><br>"
        sugestao.innerHTML += "<b>Mensagem:</b> Alerta! Seu consumo de água está muito alto. Tome medidas imediatas para reduzir o uso e contribuir para a preservação dos nossos recursos hídricos."
    }
}