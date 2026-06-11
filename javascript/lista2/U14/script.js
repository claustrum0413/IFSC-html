n = parseInt(prompt("Digite o valor para ser depositado mensalmente: "));
deposito = 0;

for(let contador=1; contador<=24; contador++) {
    deposito += deposito*0.005;
    deposito += n;
    document.write(`<p>Valor acumulado no ${contador}º mês: R$${deposito.toFixed(2)}</p>`);
}