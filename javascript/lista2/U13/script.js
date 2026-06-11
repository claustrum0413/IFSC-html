n = parseInt(prompt("Digite o número de notas: "));
soma_nota = 0;

for (let contador=1; contador<=n; contador++) {
    soma_nota += parseInt(prompt(`Digite o valor da ${contador}º nota: `));
}

nota = soma_nota/n;
resultado = "";

if (nota >= 6) {
    resultado = "Aprovado";
}
else {
    resultado = "Reprovado";
}

document.write(`<p>Esse aluno foi ${resultado} com nota ${nota}</p>`);