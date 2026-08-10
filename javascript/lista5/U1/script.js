const inputCima = document.getElementById("origem");
const inputBaixo = document.getElementById("destino");
const botao = document.getElementById("copiar");

botao.addEventListener('click', copiar);

function copiar() {
    let conteudo = inputCima.value;
    inputBaixo.value = conteudo;
}
