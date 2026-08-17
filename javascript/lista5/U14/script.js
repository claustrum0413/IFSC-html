const botoes = [1, 2, 3, 4]
const divs = [1, 2, 3, 4]

for (let i = 0; i < 4; i++) {
  botoes[i] = document.getElementById(`btn${i}`);
  divs[i] = document.getElementById(`box${i}`);
  botoes[i].addEventListener('click', () => mudarDiv(divs[i]));
}

botao.addEventListener('click', () => mudarDiv(input.value));

function mudarDiv(texto) {
  paragrafo = pegarParagrafo();
  paragrafo.innerText = texto;
}

function pegarParagrafo() {
  paragrafos = [p1, p2, p3];
  return paragrafos[Math.floor(Math.random() * 3)];
}