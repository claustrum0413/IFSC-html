const inputCima = document.getElementById("numero");
const inputBaixo = document.getElementById("resultado");
const botao = document.getElementById("botao");

botao.addEventListener('click', multiplicar);

function multiplicar() {
    let valor = inputCima.value;
    inputBaixo.value = valor*2;
}
