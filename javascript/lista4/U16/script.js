const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo");
const input = document.getElementById("input");
const animais = ['Tartaruga', 'Gato', 'Leão', 'Humano', 'Esquilo', 'Crocodilo']
const poderes = ['Invencível', 'Invisível', 'Forte', 'Velóz', 'Telecinético']

function criarSuperHeroi(nome) {
  animal = animais[sortear(animais)];
  poder = poderes[sortear(poderes)];
  return `${nome}, o ${animal} ${poder}`;
}

function registrar() {
  nome = input.value;
  feedback.innerText = criarSuperHeroi(nome);
}

function sortear(vetor) {
  return Math.floor(Math.random() * vetor.length);
}