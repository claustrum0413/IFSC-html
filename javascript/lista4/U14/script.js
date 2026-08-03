const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo");
const input = document.getElementById("input");
let etapa = 1;
let nome = "";
let lugar = "";
let objeto = "";

function gerarHistoriaEngracada() {
  return  `${nome} foi para ${lugar}, mas no caminho encontrou uma miragem realista de ${objeto} que resolveu fazer amizade!`;
}

function registrar() {
  if (etapa == 1) {
    nome = input.value;
    titulo.innerText = "Digite um lugar";
    etapa = 2;
  }
  else if (etapa == 2) {
    lugar = input.value;
    titulo.innerText = "Digite um objeto";
    etapa = 3;
  }
  else {
    objeto = input.value;
    titulo.innerText = "";
    feedback.innerText = gerarHistoriaEngracada();
    input.remove();
  }
}