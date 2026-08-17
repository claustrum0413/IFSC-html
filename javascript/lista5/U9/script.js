let jogador = "X";
let jogadorAtual = document.getElementById("jogador")
let botao = document.getElementById("botao");
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let btn9 = document.getElementById("btn9")

btn1.addEventListener('click', registrar(1,1))
btn2.addEventListener('click', registrar(1,2))
btn3.addEventListener('click', registrar(1,3))
btn4.addEventListener('click', registrar(2,1))
btn5.addEventListener('click', registrar(2,2))
btn6.addEventListener('click', registrar(2,3))
btn7.addEventListener('click', registrar(3,1))
btn8.addEventListener('click', registrar(3,2))
btn9.addEventListener('click', registrar(3,3))

let valores = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"]
];

function registrar(linha, coluna) {
    if (valores[linha][coluna] != "*") {
        alert("Essa posição já foi usada!");
        return;
    }
    valores[linha][coluna] = jogador;
    document.getElementById(`${linha}-${coluna}`).textContentC = jogador;

    if (verificarVitoria()) {
        jogadorAtual.innerText =
            `Jogador ${jogador} venceu!`;
        return;
    }

    if (verificarEmpate()) {
        return;
    }

    jogador = "O";
    randomizarJogada()

    if (verificarVitoria()) {
        jogadorAtual.innerText =
            `Jogador ${jogador} venceu!`;
        return;
    }

    if (verificarEmpate()) {
        return;
    }
    
    jogador = "X"
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

function randomizarJogada() {
    let correto = false;
    let linha;
    let coluna;

    do {
        linha = Math.floor(Math.random() * 3);
        coluna = Math.floor(Math.random() * 3);

        if (valores[linha][coluna] == "*") {
            correto = true;
        }
    } while (!correto);
    valores[linha][coluna] = jogador;
    document.getElementById(`${linha}-${coluna}`).innerText = jogador;
}