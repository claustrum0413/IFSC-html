n = parseInt(prompt("Digite um número: "));

for(let contador=1; contador<=10; contador++) {
    document.write(`<p>${n} x ${contador} = ${contador*n}</p>`);
}