const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo")
const input = document.getElementById("input");

function dataPorExtenso(dataStr) {
  const [dia, mes, ano] = dataStr.split('/').map(Number);
  
  const dias = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte', 'vinte e um', 'vinte e dois', 'vinte e três', 'vinte e quatro', 'vinte e cinco', 'vinte e seis', 'vinte e sete', 'vinte e oito', 'vinte e nove', 'trinta', 'trinta e um'];
  
  const meses = ['', 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  function converterAno(a) {
    if (a === 2000) return 'dois mil';
    if (a === 2100) return 'dois mil e cem';
    
    let extenso = 'dois mil';
    const resto = a % 1000;
    const centena = Math.floor(resto / 100);
    const dezenaUnidade = resto % 100;

    const dezenas = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    const especiais = { 10: 'dez', 11: 'onze', 12: 'doze', 13: 'treze', 14: 'quatorze', 15: 'quinze', 16: 'dezesseis', 17: 'dezessete', 18: 'dezoito', 19: 'dezenove' };

    let parteFinal = '';
    if (dezenaUnidade > 0) {
      if (dezenaUnidade < 10) {
        parteFinal = dias[dezenaUnidade];
      } else if (dezenaUnidade < 20) {
        parteFinal = especiais[dezenaUnidade];
      } else {
        const d = Math.floor(dezenaUnidade / 10);
        const u = dezenaUnidade % 10;
        parteFinal = u > 0 ? `${dezenas[d]} e ${dias[u]}` : dezenas[d];
      }
      extenso += ` e ${parteFinal}`;
    }
    return extenso;
  }

  return `${dias[dia]} de ${meses[mes]} de ${converterAno(ano)}`;
}

function registrar() {
    let horaString = input.value;
    let horario = dataPorExtenso(horaString);
    feedback.innerText = `Horário convertido: ${horario}`;
}