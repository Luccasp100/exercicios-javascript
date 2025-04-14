let soma = 0;
let media;
let valor;
for (let i = 1; i <= 10; i++) {
    valor = parseFloat(prompt("Digite o " + i + "º valor:"));
    soma += valor;
}
media = soma / 10;
alert("O somatório dos valores é: " + soma.toFixed(2));
alert("A média aritmética dos valores é: " + media.toFixed(2));
