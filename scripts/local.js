document.addEventListener("DOMContentLoaded", () => {
    const elementoAno = document.getElementById("ano-atual");
    const elementoModificacao = document.getElementById("ultima-data-modificacao");

    if (elementoAno) {
        elementoAno.textContent = new Date().getFullYear();
    }

    if (elementoModificacao) {
        elementoModificacao.textContent = document.lastModified;
    }

    const elementoTemp = document.getElementById("temp");
    const elementoVento = document.getElementById("vento");
    const elementoSensacao = document.getElementById("sensacao-termica");

    if (elementoTemp && elementoVento && elementoSensacao) {
        const temperatura = parseFloat(elementoTemp.textContent);
        const velocidadeVento = parseFloat(elementoVento.textContent);

        if (temperatura <= 10 && velocidadeVento > 4.8) {
            const resultado = calcularSensacaoTermica(temperatura, velocidadeVento);
            elementoSensacao.textContent = `${resultado.toFixed(1)} °C`;
        } else {
            elementoSensacao.textContent = "N/A";
        }
    }
});


function calcularSensacaoTermica(temperatura, vento) {
    return 13.12 + (0.6215 * temperatura) - (11.37 * Math.pow(vento, 0.16)) + (0.3965 * temperatura * Math.pow(vento, 0.16));
}