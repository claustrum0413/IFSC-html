n = parseInt(prompt("Digite o número de meses: "));
juros = 1000;

for(let contador=1; contador<=n; contador++) {
    juros += juros*0.153;
    document.write(`<p>Dívida acumulada no ${contador}º mês: ${juros.toFixed(2)}</p>`);
}