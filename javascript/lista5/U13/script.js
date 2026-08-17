const input = document.getElementById("inputText");
const botao = document.getElementById("changeButton");

botao.addEventListener('click', () => mudarTexto(input.value));

function mudarTexto(texto) {
  paragrafo = pegarParagrafo();
  paragrafo.innerText = texto;
}

function pegarParagrafo() {
  paragrafos = [p1, p2, p3];
  return paragrafos[Math.floor(Math.random() * 3)];
}