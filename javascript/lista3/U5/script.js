const numeros = [23, 45, 67, 12, 89, 34];

const feedback = document.getElementById("feedback");

function encontrarMaior() {
    let maior = numeros[0];
    for (let contador=0; contador<numeros.length; contador++) {
        if (maior < numeros[contador]) {
            maior = numeros[contador]
        }
    }
    feedback.innerText = `O maior número é: ${maior}`;
}