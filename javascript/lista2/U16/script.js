soma = 0
qnt = 0

do {
    n = parseInt(prompt("Digite um número: "));
    soma += n
    qnt++
} while (n != 0)

media = soma/qnt

document.write(`<p>Quantidade de números digitados: ${qnt}</p>`);
document.write(`<p>Soma total: ${soma}</p>`);
document.write(`<p>Média aritmética: ${media.toFixed(2)}</p>`);