document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('mensagem');
    const contadorCaracteres = document.getElementById('contador-caracteres');

    if (textarea && contadorCaracteres) {
        textarea.addEventListener('input', function () {
            const caracteresRestantes = 1000 - textarea.value.length;
            contadorCaracteres.textContent = `${caracteresRestantes} ${caracteresRestantes === 1 ? 'caractere' : 'caracteres'} restantes`;
        });
    }
});