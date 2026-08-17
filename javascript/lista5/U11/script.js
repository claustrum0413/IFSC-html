const botaoAzul = document.getElementById("blueBox");
const botaoVermelho = document.getElementById("redBox");
const botaoVerde = document.getElementById("greenBox");
const botoes = document.querySelectorAll(".color-box");

botaoAzul.addEventListener('mouseover', () => mudarBackground("blue"));
botaoVermelho.addEventListener('mouseover', () => mudarBackground("red"));
botaoVerde.addEventListener('mouseover', () => mudarBackground("green"));
botoes.forEach(botao => {botao.addEventListener('mouseout', () => mudarBackground("white"))})

function mudarBackground(cor) {document.body.style.backgroundColor = cor;}