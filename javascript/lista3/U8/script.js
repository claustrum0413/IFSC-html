qnt = parseInt(prompt("Digite a quantidade de cidades: "));
const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo")
const cidades = [];
const input = document.getElementById("input");
contador = 0;


function registrar() {
    if (contador != qnt) {
        let valorAtual = input.value;
        cidades.push(valorAtual);
        titulo.innerText = `Digite a ${contador+2}ª cidade`;
        contador++;

        if (qnt <= contador) {
            let primeira = cidades[0]
            let ultima = cidades[qnt-1]
            feedback.innerText = `Primeira e última cidades registradas, respectivamente: : ${primeira}, ${ultima}`
            titulo.innerText = "Todas as cidades foram registradas";
        }
    }
}
