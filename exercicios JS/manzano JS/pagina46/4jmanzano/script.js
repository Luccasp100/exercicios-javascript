let i = 50;
let soma = 0;
let contador = 0;
let media;
while (i <= 70) {
    if (i % 2 === 0) {
        soma += i;
        contador += 1;
    }
    i += 1;
}
if (contador > 0) {
    media = soma / contador;
    alert("A soma dos valores pares é: " + soma);
    alert("A média aritmética dos valores pares é: " + media.toFixed(2));
} else {
    alert("Não há valores pares na faixa de 50 a 70.");
}
