const qtd1 = document.getElementById("qtd1");
const qtd2 = document.getElementById("qtd2");
const qtd3 = document.getElementById("qtd3");
const botao = document.getElementById("calcular");
const frete = document.getElementById("frete");
const totalSpan = document.getElementById("total");
const cep = document.getElementById("cep");

botao.addEventListener('click', calcularTotal);

function calcularTotal() {
    freteTotal = valorFrete();
    let totalProdutos = qtd1.value*10+qtd2.value*20+qtd3.value*15;
    let total = totalProdutos + freteTotal;
    totalSpan.innerText = total;
}

function valorFrete() {
    if (cep.value == "88495000") {
        frete.innerText = "10,00"
        return 10;
    }
    else if (cep.value == "88780000") {
        frete.innerText = "16,00"
        return 16;
    }
    else if (cep.value == "88490000") {
        frete.innerText = "30,00"
        return 30;
    }
}