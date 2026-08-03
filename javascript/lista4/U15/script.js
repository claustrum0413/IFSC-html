const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo");
const input = document.getElementById("input");

function verdadeOuMentira() {
  const valor = Math.floor(Math.random() * 2);
  if (valor > 0) {
    return "verdade!";
  }
  else {
    return "mentira!";
  }
}

function registrar() {
  frase = input.value;
  feedback.innerText = `${frase}: ${verdadeOuMentira()}`;
}