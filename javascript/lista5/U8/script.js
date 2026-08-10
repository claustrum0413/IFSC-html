btn0 = document.getElementById("btn0");
btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");
btn4 = document.getElementById("btn4");
btn5 = document.getElementById("btn5");
btn6 = document.getElementById("btn6");
btn7 = document.getElementById("btn7");
btn8 = document.getElementById("btn8");
btn9 = document.getElementById("btn9");
dividir = document.getElementById("divide");
multiplica = document.getElementById("multiply");
somar = document.getElementById("add");
subtrair = document.getElementById("subtract");
decimal = document.getElementById("decimal");
limpar = document.getElementById("clear");
igual = document.getElementById("equals");
tela = document.getElementById("display");
numeros = [];
operacoes = [];
digitos = [];

btn0.addEventListener('click', () => digitarNumero(0));
btn1.addEventListener('click', () => digitarNumero(1));
btn2.addEventListener('click', () => digitarNumero(2));
btn3.addEventListener('click', () => digitarNumero(3));
btn4.addEventListener('click', () => digitarNumero(4));
btn5.addEventListener('click', () => digitarNumero(5));
btn6.addEventListener('click', () => digitarNumero(6));
btn7.addEventListener('click', () => digitarNumero(7));
btn8.addEventListener('click', () => digitarNumero(8));
btn9.addEventListener('click', () => digitarNumero(9));
somar.addEventListener('click', () => salvar("+"));
subtrair.addEventListener('click', () => salvar("-"));
dividir.addEventListener('click', () => salvar("/"));
multiplica.addEventListener('click', () => salvar("*"));
igual.addEventListener('click', () => resultado());
limpar.addEventListener('click', () => limparTudo());

function digitarNumero(botao) {
    digitos.push(botao);
    atualizar();
}

function limparTudo() {
    numeros = [];
    digitos = [];
    operacoes = [];
    atualizar();
}

function atualizar() {
    tela.value = calcularNumero();
}

function salvar(operacao) {
    numeros.push(calcularNumero());
    operacoes.push(operacao);
    digitos = [];
    atualizar();
}

function resultado() {
    numeros.push(calcularNumero());
    let expressao = "";
    numeros.forEach((num, index) => {
        expressao += num;
        if (operacoes[index]) {
            expressao += ` ${operacoes[index]} `;
        }
    });

    total = eval(expressao);
    limparTudo();
    tela.value = total;
    numeros.push(total);
}

function calcularNumero() {
  let numero = 0;
  expoente = 0;
  for (let i = digitos.length-1; i >= 0; i--) {
    numero += digitos[i] * (10 ** expoente);
    expoente++;
  }
  return numero;
}