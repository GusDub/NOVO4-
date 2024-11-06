// Seleciona o campo de entrada de telefone
const phoneInput = document.getElementById("phone");

// Função para formatar o número de telefone enquanto o usuário digita
phoneInput.addEventListener("input", function(event) {
    let value = event.target.value;

    // Remove tudo que não seja número
    value = value.replace(/\D/g, "");

    // Formatar o valor como (XX) XXXXX-XXXX
    if (value.length <= 2) {
        value = value.replace(/^(\d{0,2})/, "($1");
    } else if (value.length <= 7) {
        value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
        value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    event.target.value = value;
});

// Função para validação do número de telefone ao submeter o formulário
document.getElementById("form").addEventListener("submit", function(event) {
    const phoneValue = phoneInput.value.replace(/\D/g, '');  // Remove não-números

    // Verifica se o número de telefone tem exatamente 11 dígitos
    if (phoneValue.length !== 11) {
        alert("Por favor, insira um número de telefone válido.");
        event.preventDefault();  // Impede o envio do formulário
    }
});
