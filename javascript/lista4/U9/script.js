let linhas = parseInt(prompt("Digite a quantidade de linhas: "));
let colunas = parseInt(prompt("Digite a quantidade de colunas: "));
desenhar(linhas, colunas);

function desenhar(linha, coluna) {
    let desenho = [];
    for (i = 0; i < linha; i++) {
        stringLinha = "|";
        for (j = 0; j < coluna; j++) {
            stringLinha += "+|"
        }
        desenho.push(stringLinha);
    }
    console.log(desenho)
}