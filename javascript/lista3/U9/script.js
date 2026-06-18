qnt = parseInt(prompt("Digite a quantidade de notas: "));
const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo")
const notas = [];
const input = document.getElementById("input");
contador = 0;
let maior = 0;
let menor = null;
let soma = 0;

function registrar() {
    if (contador != qnt) {
        let valorAtual = parseInt(input.value);
        if (maior < valorAtual) {
            maior = valorAtual;
        }
        
        if (menor > valorAtual || menor == null) {
            menor = valorAtual;
        }
        soma += valorAtual

        notas.push(valorAtual);
        titulo.innerText = `Digite a ${contador+2}ª nota`;
        contador++;

        if (qnt <= contador) {
            let media = soma/qnt
            feedback.innerText = `Maior nota: ${maior}\nMenor nota: ${menor}\nMédia aritmética: ${media}`;
            titulo.innerText = "Todas as notas foram registradas";
        }
    }
}
