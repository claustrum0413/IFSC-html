const feedback = document.getElementById("feedback");
const titulo = document.getElementById("titulo")
const input = document.getElementById("input");

function calcular(horaString) {
    let periodo = "A.M."
    let horaConvertida = null;
    let hora = parseInt(horaString.split(":")[0]);
    let minutos = parseInt(horaString.split(":")[1]);
    if (hora > 12) {
        hora -= 12;
        periodo = "P.M."
    }
    if (hora == 0) {
        hora = 12;
        periodo = "A.M."
    }
    else if (hora == 12) {
        periodo = "P.M."
    }
    horaConvertida = `${hora}:${minutos} ${periodo}`;
    return horaConvertida
}

function registrar() {
    let horaString = input.value;
    let horario = calcular(horaString);
    feedback.innerText = `Horário convertido: ${horario}`;
}