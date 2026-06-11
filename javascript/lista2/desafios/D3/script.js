feedback = document.getElementById("feedback");

function inverter() {
    const textoInput = document.getElementById("resposta").value;
    const textoInvertido = textoInput.split("").reverse().join("");
    feedback.innerText = `${textoInvertido}`;
}

const botao = document.getElementById("botao");
botao.addEventListener("click", inverter);