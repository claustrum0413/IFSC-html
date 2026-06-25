
let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));
let anos = parseInt(prompt("Digite a quantidade de anos que quer calcular:"));
const feedback = document.getElementById("feedback");
calcularIdadeNoFuturo(nome, idade, anos);

function calcularIdadeNoFuturo(nome, idade, anos) {
    let idadeFuturo = idade+anos;
    feedback.innerText = `${nome} terá ${idadeFuturo} daqui a ${anos} anos!`
}