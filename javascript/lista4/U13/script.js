const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo");
const input = document.getElementById("input");

function fazerAnagrama(string) {
  let caracteres = string.split('');
  let anagrama = '';

  while (caracteres.length > 0) {
    const indiceSorteado = sortear(caracteres);
    anagrama += caracteres[indiceSorteado];
    caracteres.splice(indiceSorteado, 1);
  }

  return anagrama;
}

function sortear(caracteres) {
  return Math.floor(Math.random() * caracteres.length);
}

function registrar() {
  const string = input.value.toLowerCase();
  feedback.innerText = fazerAnagrama(string);
}