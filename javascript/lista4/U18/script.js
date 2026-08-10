const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo")
const input = document.getElementById("input");

function valorPorExtenso(valor) {
  let unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
  let dezenas = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
  let centenas = ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos']
  const especiais = { 10: 'dez', 11: 'onze', 12: 'doze', 13: 'treze', 14: 'quatorze', 15: 'quinze', 16: 'dezesseis', 17: 'dezessete', 18: 'dezoito', 19: 'dezenove' };
  let final = ""
  let string = ""

  if (valor >= 100000) {
    string = valor/100000
    final = centenas[string]
    if (valor = 100000) {
      final = "cem"
    }
  }
  if (valor >= 10000) {
    string = valor/10000
    if (dezenas[string] != '') {
      final += " e "
    }
    final = dezenas[string]
  }
  if (valor >= 1000) {
    string = valor/1000
    if (unidades[string] != '') {
      final += " e "
    }
    final += unidades[string] + " mil"
  }
  if (valor >= 100) {
    string = valor/100
    if (centenas[string] != '') {
      final += " e "
    }
    if (valor = 100) {
      final += "cem"
    }
    else {final += centenas[string]}
  }
  if (valor >= 10) {
    string = valor/10
    if (dezenas[string] = '') {
      final += " e "
    }
    else {final += dezenas[string]}
  }
  return final;
}

function registrar() {
    let String = input.value;
    let valor = valorPorExtenso(Number(String));
    feedback.innerText = `Valor por Extenso: ${valor}`;
}