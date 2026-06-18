qnt = parseInt(prompt("Digite a quantidade de notas: "));
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
            feedback.innerText = `Notas Registradas: ${notas}`
            titulo.innerText = "Todas as notas foram registradas";
        }
    }
}
