const qtd1 = document.getElementById("qtd1");
const qtd2 = document.getElementById("qtd2");
const qtd3 = document.getElementById("qtd3");
const botao = document.getElementById("calcular");
const totalSpan = document.getElementById("total");

botao.addEventListener('click', calcularTotal);

function calcularTotal() {
    let total = qtd1.value*10+qtd2.value*20+qtd3.value*15;
    totalSpan.innerText = total;
}
