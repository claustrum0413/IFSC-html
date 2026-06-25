let altura = parseInt(prompt("Digite a altura do cilindro em metros: "));
let raio = parseInt(prompt("Digite o raio do cilindro em metros: "));
const feedback = document.getElementById("feedback");
calcularVolume(altura, raio);

function calcularVolume(altura, raio) {
    volume = altura * raio * raio * 3.14
    feedback.innerText = `Volume do Cilindro: ${volume.toFixed(2)} metros²`
}