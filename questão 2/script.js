function pertenceAFibonacci(numero) {
    if (numero < 0) return false;
    let a = 0, b = 1;
    while (b < numero) {
        [a, b] = [b, a + b];
    }
    return b === numero;
}

function exibirResultado(isFibonacci) {
    const resultadoDiv = document.getElementById('resultado');
    if (isFibonacci) {
        resultadoDiv.textContent = 'O número pertence à sequência de Fibonacci.';
    } else {
        resultadoDiv.textContent = 'O número NÃO pertence à sequência de Fibonacci.';
    }
}

document.getElementById('fibonacci-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById('numero').value, 10);
    const isFibonacci = pertenceAFibonacci(numero);
    exibirResultado(isFibonacci);
});
