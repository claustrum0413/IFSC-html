const botoes = [1, 2, 3, 4]
const divs = [1, 2, 3, 4]

for (let i = 1; i < 5; i++) {
  botoes[i-1] = document.getElementById(`btn${i}`);
  divs[i-1] = document.getElementById(`box${i}`);
  botoes[i-1].addEventListener('click', () => mudarDiv(divs[i-1]));
}

function mudarDiv(div) {
  if (div == divs[0]) {
    div.style.backgroundColor = "lightblue";
    div.style.transform = "rotate(10deg)"
  }
  else if (div == divs[1]) {
    div.style.backgroundColor = "lightgreen";
    div.style.borderRadius = "100%";
  }
  else if (div == divs[2]) {
    div.style.backgroundColor = "#FFCCCC";
    div.style.paddingLeft = "20px";
    div.style.paddingRight = "20px";
  }
  else {
    div.style.backgroundColor = "lightyellow";
    div.style.paddingTop = "20px";
    div.style.paddingBottom = "20px";
  }
}