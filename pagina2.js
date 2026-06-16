// ==========================================================================
// 1. SELEÇÃO DOS ELEMENTOS DO HTML
// ==========================================================================
const dolarInput = document.getElementById('dolarInput');
const cotacaoInput = document.getElementById('cotacaoInput');
const btnCalcular = document.getElementById('btnCalcular');
const resultadoDiv = document.getElementById('resultadoDiv');
const resultadoTexto = document.getElementById('resultadoTexto');

// ==========================================================================
// 2. EVENTO DE CLIQUE DO BOTÃO
// ==========================================================================
btnCalcular.addEventListener('click', converterMoeda);

// Permite que o usuário converta também apertando a tecla "Enter"
dolarInput.addEventListener('keypress', verificarEnter);
cotacaoInput.addEventListener('keypress', verificarEnter);

// ==========================================================================
// 3. FUNÇÕES DE PROCESSAMENTO
// ==========================================================================

function verificarEnter(evento) {
    if (evento.key === 'Enter') {
        converterMoeda();
    }
}

function converterMoeda() {
    // Captura os valores dos inputs e converte para números decimais (float)
    const valorDolar = parseFloat(dolarInput.value);
    const valorCotacao = parseFloat(cotacaoInput.value);

    // Validação: impede campos vazios, textos, valores iguais a zero ou negativos
    if (isNaN(valorDolar) || isNaN(valorCotacao) || valorDolar <= 0 || valorCotacao <= 0) {
        alert('Por favor, preencha todos os campos com valores maiores que zero!');
        return; // Interrompe a função aqui caso haja erro
    }

    // Executa a fórmula matemática da conversão
    const totalReal = valorDolar * valorCotacao;

    // Formata o número final para o padrão de moeda brasileiro (R$ XX,XX)
    const valorFormatado = totalReal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Atualiza a tela com o resultado e exibe a caixinha decorativa
    resultadoTexto.textContent = valorFormatado;
    resultadoDiv.style.display = 'block';
}