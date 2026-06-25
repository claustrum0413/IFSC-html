let qnt = 3
const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo")
const notas = [];
const input = document.getElementById("input");
contador = 0;


function registrar() {
    if (contador != qnt) {
        let valorAtual = parseInt(input.value);
        notas.push(valorAtual);
        titulo.innerText = `Digite a ${contador+2}ª nota`;
        contador++;

        if (qnt <= contador) {
            let media = (notas[0] + notas[1] + notas[2]) / 3
            feedback.innerText = `Média aritmética: ${media.toFixed(2)}`
            titulo.innerText = "Todas as notas foram registradas";
        }
    }
}
