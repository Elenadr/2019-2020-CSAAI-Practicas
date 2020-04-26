console.log("Deslizador... main")

const deslizador = document.getElementById('deslizador')
const display = document.getElementById('display')

deslizador.oninput = () => {
    display.innerHTML = deslizador.value
}
