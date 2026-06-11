n = parseInt(prompt("Digite o número para a contagem parar: "));

if (n>0) {
    for(let contador=0; contador<=n; contador++) {
    document.write(`<p>${contador}</p>`);
    }
}

else {
    for(let contador=0; contador>=n; contador--) {
    document.write(`<p>${contador}</p>`);
    }
}