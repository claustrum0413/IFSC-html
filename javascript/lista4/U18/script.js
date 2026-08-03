const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo")
const input = document.getElementById("input");

function valorPorExtenso(valor) {
  let unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
  let dezenas = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
  let centenas = ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']

  
}

function registrar() {
    let String = input.value;
    let valor = valorPorExtenso(String);
    feedback.innerText = `Valor por Extenso: ${valor}`;
}