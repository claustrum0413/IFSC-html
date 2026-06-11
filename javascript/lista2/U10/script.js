n = parseInt(prompt("Digite um número: "));

for(let contador=0; contador<=n; contador++) {
    if (contador%2 == 0) {
        document.write(`<p>${contador}</p>`);
    }
}