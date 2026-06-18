const criar = document.getElementById("criar");
criar.addEventListener("click", criarSenha);
const senha = document.getElementById("feedback");

function criarSenha() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$&_.';
  let resultado = ''; 
  for (let i = 0; i < 8; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    resultado += caracteres.charAt(indiceAleatorio);
  }

  feedback.innerText = resultado
}