total = 0

do {
    cod = parseInt(prompt("Digite o código do produto: "));
    qnt = parseInt(prompt("Digite a quantidade a ser comprada: "));
    compra = 0;
    
    switch(cod) {
        case 1:
            document.write(`<p>Foram comprados ${qnt} sucos. Valor da compra: R$${6*qnt}</p>`);
            total += 6*qnt
            break;
        case 2:
            document.write(`<p>Foram comprados ${qnt} pães de queijo. Valor da compra: R$${3*qnt}</p>`);
            total += 3*qnt
            break;
        case 3:
            document.write(`<p>Foram comprados ${qnt} pasteis. Valor da compra: R$${7*qnt}</p>`);
            total += 7*qnt
            break;
        case 4:
            document.write(`<p>Foram comprados ${qnt} saladas de frutas. Valor da compra: R$${9*qnt}</p>`);
            total += 9*qnt
            break;
        case 5:
            document.write(`<p>Foram comprados ${qnt} cafés com leite. Valor da compra: R$${3.5*qnt}</p>`);
            total += 3.5*qnt
            break;
        case 6:
            document.write(`<p>Foram comprados ${qnt} cappuccinos. Valor da compra: R$${4.5*qnt}</p>`);
            total += 4.5*qnt
            break;
        case 7:
            document.write(`<p>Foram comprados ${qnt} iogurtes. Valor da compra: R$${6.5*qnt}</p>`);
            total += 6.5*qnt
            break;
        case 8:
            document.write(`<p>Foram comprados ${qnt} águas. Valor da compra: R$${2.5*qnt}</p>`);
            total += 2.5*qnt
            break;
    }
} while (cod != 0 && qnt != 0)

document.write(`<p>Valor total acumulado no caixa: R$${total}</p>`);