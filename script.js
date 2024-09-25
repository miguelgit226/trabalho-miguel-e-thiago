document.getElementById('generate').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const password = gerarSenha(length, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('result').textContent = password;
});

function gerarSenha(tamanho, incluirMaiusculas, incluirNumeros, incluirEspeciais) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz';
    let senha = caracteres;

    if (incluirMaiusculas) senha += caracteres.toUpperCase();
    if (incluirNumeros) senha += '0123456789';
    if (incluirEspeciais) senha += '!@#$%^&*()_+[]{}|;:,.<>?';

    let resultado = '';
    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * senha.length);
        resultado += senha[indice];
    }
    return resultado;
}