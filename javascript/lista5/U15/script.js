const listaProdutos = [1, 2, 3];
const itens = document.getElementById("itensCarrinho");
const limpar = document.getElementById("limparCarrinho");
const inputFrete = document.getElementById("cep");
const botaoFrete = document.getElementById("calcularFrete");
const valorFrete = document.getElementById("valorFrete");
const inputCupom = document.getElementById("cupom");
const botaoCupom = document.getElementById("aplicarCupom");
const pCupom = document.getElementById("cupomAplicado");
const totalParagrafo = document.getElementById("totalCarrinho");
let frete = 0;

listaProdutos.forEach(i => {
  const produto = document.querySelector(`[data-id="${i}"]`);
  let botao = produto.querySelector('.adicionar-carrinho')
  botao.addEventListener('click', () => adicionarCarrinho(produto))
})

limpar.addEventListener('click', () => limparCarrinho());
botaoFrete.addEventListener('click', () => calcularFrete(Number(inputFrete.value)));
botaoCupom.addEventListener('click', () => ativarCupom(inputCupom.value));

function calcularFrete(input) {
  frete = Math.trunc(input / 10000000);
  valorFrete.textContent = `${frete},00`;
  calcularTotal();
}

function calcularTotal() {
  let total = 0;
  const itensP = itens.querySelectorAll("p");
  itensP.forEach(item => {
    total += Number(item.getAttribute('data-preco')) * Number(item.getAttribute('data-qnt'));
  });
  total += frete;
  if (pCupom.style.display == "inline-block") {total = total*0.9}
  totalParagrafo.textContent = `R$${total.toFixed(2)}`;
}

function ativarCupom(input) {
  if (input == "DESCONTO10") {
    pCupom.style.display = "inline-block";
    calcularTotal();
    return true;
  }
}

function adicionarCarrinho(produto) {
  let novoItem = document.createElement("p");
  let valor = produto.getAttribute('data-preco');
  let nome = produto.getAttribute('data-nome');
  let qnt = 1;
  const itensP = itens.querySelectorAll("p");
  itensP.forEach(item => {
    if (item.getAttribute('data-preco') == valor) {
      qnt = Number(item.getAttribute('data-qnt'))+1;
      item.textContent = `${nome}, Quantidade: ${qnt}, Valor: R$${valor}`;
      item.setAttribute("data-qnt", qnt);
    }
  });
  if (qnt == 1) {
    novoItem.textContent = `${nome}, Quantidade: ${qnt}, Valor: R$${valor}`;
    itens.appendChild(novoItem);
    novoItem.setAttribute("data-preco", valor);
    novoItem.setAttribute("data-qnt", qnt);
  }
  calcularTotal();
}

function limparCarrinho() {
  itens.innerHTML = '';
  calcularTotal();
}