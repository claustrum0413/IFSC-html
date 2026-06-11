n = parseInt(prompt("Digite um número: "));
inicio = parseInt(prompt("Digite um número para começar a tabuada: "));
fim = parseInt(prompt("Digite um número para finalizar a tabuada: "));

for(let contador=inicio; contador<=fim; contador++) {
    document.write(`<p>${n} x ${contador} = ${contador*n}</p>`);
}
