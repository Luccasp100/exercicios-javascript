let senha;
const senhaCorreta = "1234";

do {
    senha = prompt("Digite a senha:");
    if (senha !== senhaCorreta) {
        alert("Senha incorreta. Tente novamente.");
    }
} while (senha !== senhaCorreta);
alert("Senha correta! Acesso permitido.");
