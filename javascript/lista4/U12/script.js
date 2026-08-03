const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo")
const input = document.getElementById("input");
const div = document.getElementById('competidores');
competidores = []

function registrar() {
  nome = input.value;
  if (nome != '') {
    competidores.push(nome)
    const Paragrafo = document.createElement('p');
    Paragrafo.textContent = nome;
    div.appendChild(Paragrafo);
    return true;
  }
  return false;
}

function sortearGanhador() {
  const sortear = Math.floor(Math.random() * competidores.length);
  const sorteado = competidores[sortear];
  return sorteado;
}

function verSorteado() {
    feedback.innerText = `O ganhador do sorteio é: ${sortearGanhador()}!`;
}