// Selecionando os elementos do DOM
const minutesInput = document.getElementById('minutesInput');
const convertBtn = document.getElementById('convertBtn');
const resultBox = document.getElementById('resultBox');
const resultValue = document.getElementById('resultValue');

// Função para realizar a conversão
function convertMinutesToSeconds() {
    const minutes = parseFloat(minutesInput.value);

    // Validação simples para garantir que o usuário digitou um número válido
    if (isNaN(minutes) || minutes < 0) {
        alert('Por favor, insira um número válido de minutos.');
        return;
    }

    // A fórmula matemática: 1 minuto = 60 segundos
    const seconds = minutes * 60;

    // Atualiza o texto do resultado e exibe o bloco
    resultValue.textContent = seconds;
    resultBox.style.display = 'block';
}

// Ouvinte de clique no botão
convertBtn.addEventListener('click', convertMinutesToSeconds);

// Bônus: Permitir converter ao apertar "Enter" dentro do input
minutesInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertMinutesToSeconds();
    }
});