const feedback = document.getElementById("feedback");
const input = document.getElementById("input");

function registrar() {
    numero = parseInt(input.value);
    if (ehpar(numero)) {
        feedback.innerText = `${numero} é par!`
    }
    else {
        feedback.innerText = `${numero} não é par!`
    }
}

function ehpar(numero) {
    if (numero%2 == 0) {
        return true;
    }
}