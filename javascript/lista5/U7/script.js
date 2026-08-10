botao1 = document.getElementById("botao1");
botao2 = document.getElementById("botao2");

botao1.addEventListener('mouseover', () => trocar(1));
botao2.addEventListener('mouseover', () => trocar(2));

botao1.addEventListener('click', () => vencer(1));
botao2.addEventListener('click', () => vencer(2));

function trocar(botao) {
    if (botao == 1) {
        if (botao1.textContent == "Clique aqui para VENCER!") {
            botao1.textContent = "Clique aqui para PERDER!";
            botao2.textContent = "Clique aqui para VENCER!";
        }
     }
    else {
        if (botao2.textContent == "Clique aqui para VENCER!") {
            botao2.textContent = "Clique aqui para PERDER!";
            botao1.textContent = "Clique aqui para VENCER!";
        }
     }
}

function vencer(botao) {
    if (botao == 1) {
        if (botao1.textContent == "Clique aqui para VENCER!") {
            alert("Você ganhou!");
        }
        else {
            alert("Você perdeu!");
        }
     }
    else {
        if (botao2.textContent == "Clique aqui para VENCER!") {
            alert("Você ganhou!");
        }
        else {
            alert("Você perdeu!");
        }
     }
}