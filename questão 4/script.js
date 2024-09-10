const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentuais(faturamento) {
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    const percentuais = {};

    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2);
    }

    return percentuais;
}

function exibirResultados(percentuais) {
    const divResultados = document.getElementById('resultados');
    let html = '<ul>';

    for (const estado in percentuais) {
        html += `<li>${estado}: ${percentuais[estado]}%</li>`;
    }

    html += '</ul>';
    divResultados.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    const percentuais = calcularPercentuais(faturamento);
    exibirResultados(percentuais);
});
