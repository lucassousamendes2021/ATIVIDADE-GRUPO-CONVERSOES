// Seleciona os elementos do HTML pelos IDs
const cmInput = document.getElementById('cmInput');
const btnConverter = document.getElementById('btnConverter');
const resultadoContainer = document.getElementById('resultadoContainer');
const resultadoTexto = document.getElementById('resultadoTexto');

// Função que faz o cálculo e exibe o resultado
function converterMedida() {
    const valorCm = cmInput.value;

    // Verifica se o campo está vazio
    if (valorCm === '') {
        alert('Por favor, digite um valor em centímetros.');
        return;
    }

    // Realiza a conversão (divide por 100)
    const valorMetros = parseFloat(valorCm) / 100;

    // Formata os números para o padrão brasileiro (com vírgula)
    const cmFormatado = parseFloat(valorCm).toLocaleString('pt-BR');
    const metrosFormatado = valorMetros.toLocaleString('pt-BR', { maximumFractionDigits: 4 });

    // Insere o texto e exibe o bloco de resultado
    resultadoTexto.textContent = `${cmFormatado} cm = ${metrosFormatado} m`;
    resultadoContainer.style.display = 'block';
}

// Executa a função ao clicar no botão
btnConverter.addEventListener('click', converterMedida);

// Executa a função ao apertar a tecla "Enter" no teclado
cmInput.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        converterMedida();
    }
});