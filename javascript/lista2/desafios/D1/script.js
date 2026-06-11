const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
feedback = document.getElementById("feedback");

function adivinhar() {
    const valorInput = document.getElementById("resposta").value;
    const resposta = parseInt(valorInput)
    if (isNaN(resposta)) {
        feedback.innerText = "Por favor, digite um número válido.";
        return;
    }
    else if (resposta == numeroAleatorio) {
        feedback.innerText = `Correto! o número realmente é ${numeroAleatorio}`;
    }
    else if (resposta > numeroAleatorio) {
        feedback.innerText = `O número é menor que ${resposta}`;
    }
    else {
        feedback.innerText = `O número é maior que ${resposta}`;
    }
}

const botao = document.getElementById("botao");
botao.addEventListener("click", adivinhar);