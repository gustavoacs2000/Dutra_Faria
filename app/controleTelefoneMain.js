document.addEventListener('DOMContentLoaded', function () {
    const inputTelefone = document.querySelector('.telefone-usuario');

    if (inputTelefone) {
        inputTelefone.addEventListener('input', function () {
            formatarTelefone(this);
        });

        inputTelefone.addEventListener('keydown', function (event) {
            if (!/[\d\b\-\→\←]/.test(event.key) && event.key !== 'Backspace') {
                event.preventDefault();
            }
        });
    }
});

function formatarTelefone(input) {
    let numeros = input.value.replace(/\D/g, '');
    
    if (numeros.length <= 10) {
        numeros = numeros.replace(/^(\d{2})(\d{1,5})$/, '($1) $2');
    } else {
        numeros = numeros.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }
    input.value = numeros;
}