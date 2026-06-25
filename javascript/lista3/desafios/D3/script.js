let jogador = "Você";
let jogadorAtual = document.getElementById("jogadaC")
let jogada1 = document.getElementById("jogadaP");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input1P = document.getElementById("input1P");
let input2P = document.getElementById("input2P");
let botao = document.getElementById("botao");
let tiros = document.getElementById("tiros");
let certeiros = document.getElementById("certeiros");
let porcentagem = document.getElementById("porcentagem");
let tirostotais = 0;
let acertos = 0;

let valores1 = [
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
];

let valores2 = [
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*"]
];

const NAVIOS = {
    "Porta-Aviões": [5, 1],
    "Hidroavião": [3, 2],
    "Submarino": [1, 5],
    "Cruzado": [2, 3]
};

criarTabuleiro(valores1);
criarTabuleiro(valores2);

function criarTabuleiro(matriz) {
    for (let navio in NAVIOS) {
        for (let i = 0; i < NAVIOS[navio][1]; i++) {
            let tamanho = NAVIOS[navio][0];
            let posicionado = false;

            while (!posicionado) {
                let vertical = Math.random() < 0.5;
                let linha, coluna;
                let coordenadasOffsets = [];
                if (navio === "Hidroavião") {
                    linha = Math.floor(Math.random() * 8) + 1; 
                    coluna = Math.floor(Math.random() * 8) + 1;

                    let direcao = Math.floor(Math.random() * 4);

                    if (direcao === 0) {
                        coordenadasOffsets = [{dl: -1, dc: 0}, {dl: 0, dc: -1}, {dl: 0, dc: 1}];
                    } else if (direcao === 1) {
                        coordenadasOffsets = [{dl: 1, dc: 0}, {dl: 0, dc: -1}, {dl: 0, dc: 1}];
                    } else if (direcao === 2) {
                        coordenadasOffsets = [{dl: 0, dc: -1}, {dl: -1, dc: 0}, {dl: 1, dc: 0}];
                    } else {
                        coordenadasOffsets = [{dl: 0, dc: 1}, {dl: -1, dc: 0}, {dl: 1, dc: 0}];
                    }
                }
                else {
                    if (vertical) {
                        linha = Math.floor(Math.random() * (10 - tamanho + 1));
                        coluna = Math.floor(Math.random() * 10);
                        for (let j = 0; j < tamanho; j++) coordenadasOffsets.push({dl: j, dc: 0});
                    } else {
                        linha = Math.floor(Math.random() * 10);
                        coluna = Math.floor(Math.random() * (10 - tamanho + 1));
                        for (let j = 0; j < tamanho; j++) coordenadasOffsets.push({dl: 0, dc: j});
                    }
                }

                let espacoLivre = true;
                for (let offset of coordenadasOffsets) {
                    let l = linha + offset.dl;
                    let c = coluna + offset.dc;

                    if (l < 0 || l > 9 || c < 0 || c > 9 || matriz[l][c] !== "*") {
                        espacoLivre = false;
                        break;
                    }
                }

                if (espacoLivre) {
                    let caractereNavio = navio.charAt(0);
                    for (let offset of coordenadasOffsets) {
                        let l = linha + offset.dl;
                        let c = coluna + offset.dc;
                        matriz[l][c] = caractereNavio;
                        if (matriz === valores1) {
                            document.getElementById(`p-${l}-${c}`).innerText = caractereNavio;
                        }
                    }
                    posicionado = true;
                }
            }
        }
    }
}

function registrar() {
    if (jogador !== "Você") return;
    let linha = parseInt(document.getElementById("input1").value) - 1;
    let coluna = parseInt(document.getElementById("input2").value) - 1;

    if (linha < 0 || linha > 9 || coluna < 0 || coluna > 9 || isNaN(linha) || isNaN(coluna)) {
        alert("Digite valores entre 1 e 10");
        return;
    }

    if (valores2[linha][coluna] == "X" || valores2[linha][coluna] == "💥") {
        alert("Essa posição já foi atirada!");
        return;
    }
    atirar(linha, coluna, "Você");

    jogador = "Computador";
    randomizarJogada();
}

function verificarVitoria(matrizAlvo) {
    for (let l = 0; l < 10; l++) {
        for (let c = 0; c < 10; c++) {
            let casaAtual = matrizAlvo[l][c];
            if (casaAtual === "P" || casaAtual === "H" || casaAtual === "S" || casaAtual === "C") {
                return false; 
            }
        }
    }
    input1.remove();
    input1P.remove();
    input2.remove();
    input2P.remove();
    botao.remove();
    return true; 
}

function randomizarJogada() {
    let linha, coluna;
    let jogadaValida = false;

    while (!jogadaValida) {
        linha = Math.floor(Math.random() * 10);
        coluna = Math.floor(Math.random() * 10);

        let statusCasa = valores1[linha][coluna];

        if (statusCasa !== "X" && statusCasa !== "💥") {
            jogadaValida = true;
        }
    }
    atirar(linha, coluna, "Computador");
    jogador = "Você";
}

function atirar(linha, coluna, jogador) {
    let alvo = null;
    let celulaHTML = null;
    if (jogador === "Você") {
        tirostotais += 1;
        tiros.innerText = `Quantidade total de tiros: ${tirostotais}`
        alvo = valores2[linha][coluna]; 
        celulaHTML = document.getElementById(`c-${linha}-${coluna}`);
        if (alvo === "*") {
            jogada1.innerText = `${jogador} acertou água`;
            valores2[linha][coluna] = "X";
            celulaHTML.innerText = "X";
            let operacaoPorcentagem = acertos/tirostotais*100;
            let porcentagemLimitada = operacaoPorcentagem.toFixed(2)
            porcentagem.innerText = `Porcentagem de acertos: ${porcentagemLimitada}%`
        }
        else {
            jogada1.innerText = `${jogador} acertou um ${obterNomeNavio(alvo)}!`;
            valores2[linha][coluna] = "💥";
            celulaHTML.innerText = "💥";
            acertos += 1;
            certeiros.innerText = `Quantidade de acertos: ${acertos}`
            let operacaoPorcentagem = acertos/tirostotais*100;
            let porcentagemLimitada = operacaoPorcentagem.toFixed(2)
            porcentagem.innerText = `Porcentagem de acertos: ${porcentagemLimitada}%`
        }
    }
    else {
        alvo = valores1[linha][coluna]; 
        celulaHTML = document.getElementById(`p-${linha}-${coluna}`);
        if (alvo === "*") {
            jogadorAtual.innerText = `${jogador} acertou água`;
            celulaHTML.innerText = "X";
            valores1[linha][coluna] = "X";
        }
        else {
            jogadorAtual.innerText = `${jogador} acertou um ${obterNomeNavio(alvo)}!`;
            valores1[linha][coluna] = "💥";
            celulaHTML.innerText = "💥";
        }
    }
    if (verificarVitoria(valores1)) {
        jogadorAtual.innerText = `O computador venceu!`;
        return;
    }
    else if (verificarVitoria(valores2)) {
        jogadorAtual.innerText = `Você venceu!`;
    }
}

function obterNomeNavio(caractere) {
    for (let navio in NAVIOS) {
        if (navio.charAt(0) === caractere) {
            return navio;
        }
    }
    return "Navio Desconhecido";
}