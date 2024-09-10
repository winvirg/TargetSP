function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

function exibirResultado(resultado) {
    const divResultado = document.getElementById('resultado');
    divResultado.textContent = `String invertida: ${resultado}`;
}

document.getElementById('inversao-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const entrada = document.getElementById('entrada').value;
    const resultado = inverterString(entrada);
    exibirResultado(resultado);
});
