feedback1 = document.getElementById("feedback1");
feedback2 = document.getElementById("feedback2");

function ehConsoante(char) {
  return /^[a-z]$/.test(char.toLowerCase()) && !/^[aeiou]$/.test(char.toLowerCase());
}

function ehVogal(char) {
  return /^[aeiou]$/.test(char.toLowerCase());
}

function contar() {
    consoantes = 0;
    vogais = 0;

    const textoInput = document.getElementById("resposta").value;
    const textoSeparado = textoInput.split("");
    for (const palavra of textoSeparado) {
        if (ehConsoante(palavra)) {
            consoantes += 1;
        }
        else if (ehVogal(palavra)) {
            vogais += 1;
        }
    }
    feedback1.innerText = `Número de vogais na frase: ${vogais}`;
    feedback2.innerText = `Número de consoantes na frase: ${consoantes}`;
}

const botao = document.getElementById("botao");
botao.addEventListener("click", contar);