const feedback = document.getElementById("feedback");
const numeros = []

for(let contador=2; contador<=20; contador+=2) {
    numeros.push(contador)
}


function somar() {
    let soma = 0
    for (let contador=0; contador<numeros.length; contador++) {
        soma += numeros[contador]
    }
    feedback.innerText = `O maior número é: ${soma}`;
}