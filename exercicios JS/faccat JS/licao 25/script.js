alert("saldo positivo saldo negativo");
let valorSaldo = parseFloat(prompt("Digite o seu saldo atual: "));
let valorCredito = parseFloat(prompt("Digite o valor do seu crédito: "));
let valorDebito = parseFloat(prompt("Digite o valor do seu débito: "));
let saldoAtual = valorSaldo - valorDebito + valorCredito;

if (saldoAtual >= 0) {
    alert("Saldo positivo");
} else {
    alert("Saldo negativo"); 
}