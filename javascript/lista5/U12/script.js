const botaoAzul = document.getElementById("button2");
const botaoVermelho = document.getElementById("button1");
const botaoVerde = document.getElementById("button3");
const botoes = document.querySelectorAll("button")

botaoAzul.addEventListener('mouseover', () => mudarTexto("blue"));
botaoVermelho.addEventListener('mouseover', () => mudarTexto("red"));
botaoVerde.addEventListener('mouseover', () => mudarTexto("green"));
botoes.forEach(botao => {botao.addEventListener('mouseout', () => mudarTexto("white"))})

function mudarTexto(cor) {
  document.body.style.color = cor;
  if (cor == "blue") {
    document.body.style.fontFamily = "monospace";
  }
  else if (cor == "red") {
    document.body.style.fontFamily = "Times New Roman";
  }
  else if (cor == "green") {
    document.body.style.fontFamily = "Allura";
  }
}