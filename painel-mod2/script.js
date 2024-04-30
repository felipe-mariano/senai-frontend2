// Funções para gerenciar login e logout
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'senai' && password === 'HRT2024') {
        window.location.href = 'painel.html';
    } else {
        alert('Usuário ou senha inválidos.');
    }
}