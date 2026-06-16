// Seleciona os elementos do HTML através dos IDs
const cmInput = document.getElementById('cmInput');
const btnConverter = document.getElementById('btnConverter');
const resultadoContainer = document.getElementById('resultadoContainer');
const resultadoTexto = document.getElementById('resultadoTexto');

// Função responsável por fazer o cálculo e mostrar na tela
function converterMedida() {
    const valorCm = cmInput.value;

    // 1. Validação: Verifica se o usuário digitou algo
    if (valorCm === '') {
        alert('Por favor, digite um valor em centímetros.');
        return;
    }

    // 2. Cálculo: Converte para número e divide por 100 (1 metro = 100 centímetros)
    const valorMetros = parseFloat(valorCm) / 100;

    // 3. Formatação: Transforma os pontos em vírgulas para o formato brasileiro
    const cmFormatado = parseFloat(valorCm).toLocaleString('pt-BR');
    const metrosFormatado = valorMetros.toLocaleString('pt-BR', { maximumFractionDigits: 4 });

    // 4. Exibição: Modifica o texto do HTML e torna o bloco visível
    resultadoTexto.textContent = `${cmFormatado} cm = ${metrosFormatado} m`;
    resultadoContainer.style.display = 'block';
}

// Escuta o clique do mouse no botão "Converter"
btnConverter.addEventListener('click', converterMedida);

// Escuta o teclado e permite converter ao apertar a tecla "Enter"
cmInput.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        converterMedida();
    }
});