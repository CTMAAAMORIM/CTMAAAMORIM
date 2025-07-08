// Verifica se hoje é fim de semana e mostra uma mensagem
const mensagemDiv = document.getElementById('mensagem-fim-de-semana');
const hoje = new Date();
const diaSemana = hoje.getDay(); // 0 = domingo, 6 = sábado

if (diaSemana === 0 || diaSemana === 6) {
    mensagemDiv.innerHTML = `
        <p>🏓 As competições e treinos estão a decorrer este fim de semana!</p>
        <p>Veja as últimas atualizações aqui.</p>
    `;
} else {
    mensagemDiv.innerHTML = `
        <p>⚠ As atualizações são feitas aos fins de semana. Volte sábado ou domingo!</p>
    `;
}