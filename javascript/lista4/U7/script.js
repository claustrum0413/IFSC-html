let qnt = 4;
const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo")
const input = document.getElementById("input");
contador = 0;
let numeros = [];

function registrar() {
    if (contador != qnt) {
        let valorAtual = parseInt(input.value);
        numeros.push(valorAtual);
        titulo.innerText = `Digite o ${contador+2}ª número`;
        contador++;

        if (qnt <= contador) {
            somar(numeros);
            titulo.remove();    
        }
    }
}

function somar() {
    soma = 0;
    for (i = 0; i < 4; i++) {
        soma += numeros[i]
    }
    feedback.innerText = `Soma dos quatro números: ${soma}`
}