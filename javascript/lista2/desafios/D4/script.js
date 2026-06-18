const tr = document.getElementById("triangulo");
tr.addEventListener("click", tri);
const qd = document.getElementById("quadrado");
qd.addEventListener("click", quad);

function tri() {
  console.log("  *  \n *** \n*****")
}

function quad() {
  console.log("******\n******\n******")
}