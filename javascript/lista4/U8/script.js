    const feedback = document.getElementById("feedback");
    const titulo = document.getElementById("titulo")
    const input = document.getElementById("input");
    let qnt = parseInt(prompt("Digite a quantidade de números que o vetor terá: "));
    let contador = 0;
    let numeros = []

    function ehvazio(array) {
        if (array.length === 0) {
            feedback.innerText = `O vetor está vazio!`;
            return true;
        }
        return false;
    }

    function maior(array) {
        if (ehvazio(array)) {
            return -1;
        }
        let maiorNum = array[0]
        array.forEach(i => {
            if (i > maiorNum) {
                maiorNum = i;
            };
        });
        feedback.innerText = `Maior valor: ${maiorNum}`;
        return maiorNum;
    }

    function menor(array) {
        if (ehvazio(array)) {
            return -1;
        }

        let menorNum = array[0]
        array.forEach(i => {
            if (i < menorNum) {
                menorNum = i;
            }
        });
        feedback.innerText = `Menor valor: ${menorNum}`;
        return menorNum;
    }

    function medio(array) {
        if (ehvazio(array)) {
            return -1;
        }
        let soma = 0;
        array.forEach(i => {
            soma += i;
        });
        media = soma/array.length;
        feedback.innerText = `Valor médio: ${media}`;
        return media;
    }

    function registrar() {
        if (contador != qnt) {
            let valorAtual = parseInt(input.value);
            numeros.push(valorAtual);
            titulo.innerText = `Digite o ${contador+2}ª número`;
            contador++;

            if (qnt <= contador) {
                feedback.innerText = `Todos os números foram cadastrados`;
                input.remove();
                titulo.remove();
                document.getElementById("regist").remove();
            }
        }
    }