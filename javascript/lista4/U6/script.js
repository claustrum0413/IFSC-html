const feedback = document.getElementById("feedback");
const input = document.getElementById("input");

function traduzir() {
    frase = input.value;
    fraseTraduzida = substituir(frase);
    feedback.innerText = `Frase Traduzida: ${fraseTraduzida}`;
}

function substituir(frase) {
    return frase
        .replaceAll("muito", "mt")
        .replaceAll("demais", "dms")
        .replaceAll("feliz", "felizona")
        .replaceAll("estou", "to")
        .replaceAll("hoje", "hj")
        .replaceAll("tudo", "td")
        .replaceAll("você", "vc")
        .replaceAll("obrigado", "obg")
        .replaceAll("depois", "dps")
        .replaceAll("valeu", "vlw")
        .replaceAll("porque", "pq")
        .replaceAll("beleza", "blz")
        .replaceAll("também", "tbm");
}