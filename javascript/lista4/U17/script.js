const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo");
const input = document.getElementById("input");
const simbolos = "123456789_xX";

function criarApelido(nome) {
  apelido = nome;
  for (let i = 0; i < 4; i++) {
    apelido += sortear();
  }
  return apelido;
}

function registrar() {
  nome = input.value;
  feedback.innerText = criarApelido(nome);
}

function sortear() {
  return simbolos[Math.floor(Math.random() * simbolos.length)];
}