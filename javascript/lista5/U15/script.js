const listaProdutos = [0, 1, 2];
const itens = document.getElementById("itensCarrinho")

for (let i = 0; i < 3; i++) {
  listaProdutos[i] = document.getElementById(i+1)
  let botao = listaProdutos[i].querySelector('.adicionar-carrinho')
  botao.addEventListener('click', () => adicionarCarrinho(listaProdutos[i]))
}

function adicionarCarrinho(produto) {
  let novoItem = document.createElement("p");
  let valor = produto.getAttribute('data-preco');
  let nome = produto.getAttribute('data-nome');
  novoItem.textContent = `${nome}: ${valor}`;
  itens.appendChild(novoItem);
}