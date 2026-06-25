let horas = parseInt(prompt("Digite suas horas de jogo: "));
let minutos = parseInt(prompt("Digite seus minutos de jogo: "));
const feedback = document.getElementById("feedback");
calcularTempoDeJogo(horas, minutos);

function calcularTempoDeJogo(horas, minutos) {
    horasEmMinutos = horas*60;
    minutosTotais = horasEmMinutos+minutos;
    feedback.innerText = `Minutos totais de jogo: ${minutosTotais}`;
}