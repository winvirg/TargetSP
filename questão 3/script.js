function calcularFaturamento(dados) {

    const valores = dados.map(d => d.valor).filter(valor => valor > 0);

    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const media = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;

    const diasAcimaDaMedia = valores.filter(valor => valor > media).length;

    return { menor, maior, media, diasAcimaDaMedia };
}

function exibirResultados(resultados) {
    const divResultados = document.getElementById('resultados');

    divResultados.innerHTML = `
        <p>Menor valor de faturamento: ${resultados.menor.toFixed(2)}</p>
        <p>Maior valor de faturamento: ${resultados.maior.toFixed(2)}</p>
        <p>Média de faturamento: ${resultados.media.toFixed(2)}</p>
        <p>Número de dias acima da média: ${resultados.diasAcimaDaMedia}</p>
    `;
}

function carregarECalcular() {
    fetch('faturamento.json')
        .then(response => response.json())
        .then(data => {
            const resultados = calcularFaturamento(data);
            exibirResultados(resultados);
        })
        .catch(error => {
            document.getElementById('resultados').innerHTML = 'Erro ao carregar os dados.';
            console.error('Erro ao carregar o arquivo JSON:', error);
        });
}

document.getElementById('calcular-btn').addEventListener('click', carregarECalcular);
