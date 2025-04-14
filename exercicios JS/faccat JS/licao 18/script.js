alert("Validação de votação");
let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu: "));
let anoAtual = 2025;
let idade = anoAtual - anoNascimento;

if (idade >= 16) {
    alert("Você pode votar!");
} else {
    alert("Infelizmente você não pode votar ainda!");
}
