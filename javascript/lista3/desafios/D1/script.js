let jogador = "X";
let jogadorAtual = document.getElementById("jogador")
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input1P = document.getElementById("input1P");
let input2P = document.getElementById("input2P");
let botao = document.getElementById("botao");

let valores = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"]
];

function registrar() {
    let linha = parseInt(document.getElementById("input1").value) - 1;
    let coluna = parseInt(document.getElementById("input2").value) - 1;

    if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
        alert("Digite valores entre 1 e 3");
        return;
    }

    if (valores[linha][coluna] != "*") {
        alert("Essa posição já foi usada!");
        return;
    }

    valores[linha][coluna] = jogador;
    document.getElementById(`${linha}-${coluna}`).innerText = jogador;

    if (verificarVitoria()) {
        jogadorAtual.innerText =
            `Jogador ${jogador} venceu!`;
        vitoria = true;
        return;
    }

    if (verificarEmpate()) {
        return;
    }

    if (jogador == "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }
    jogadorAtual.innerText = `Jogador Atual: ${jogador}`;
}

function verificarVitoria() {
    for (let i = 0; i < 3; i++) {
        if (
            valores[i][0] == jogador &&
            valores[i][1] == jogador &&
            valores[i][2] == jogador
            ) {
            input1.remove();
            input2.remove();
            input1P.remove();
            input2P.remove();
            botao.remove();
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (
            valores[0][i] == jogador &&
            valores[1][i] == jogador &&
            valores[2][i] == jogador
        ) {
            input1.remove();
            input2.remove();
            input1P.remove();
            input2P.remove();
            botao.remove();
            return true;
        }
    }

    if (
        valores[0][0] == jogador &&
        valores[1][1] == jogador &&
        valores[2][2] == jogador
    ) {
        input1.remove();
        input2.remove();
        input1P.remove();
        input2P.remove();
        botao.remove();
        return true;
    }

    if (
        valores[0][2] == jogador &&
        valores[1][1] == jogador &&
        valores[2][0] == jogador
    ) {
        input1.remove();
        input2.remove();
        input1P.remove();
        input2P.remove();
        botao.remove();
        return true;
    }
        return false;
}

function verificarEmpate() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (valores[i][j] == "*") {
                return false;
            }
        }
    }
    document.getElementById("jogador").innerText = "Empate!";
    input1.remove();
    input2.remove();
    input1P.remove();
    input2P.remove();
    botao.remove();
    return true;
}