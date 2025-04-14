let num1, num2, num3, num4, num5;
let maior, menor;
num1 = parseInt(prompt("Digite o primeiro número:"));
num2 = parseInt(prompt("Digite o segundo número:"));
num3 = parseInt(prompt("Digite o terceiro número:"));
num4 = parseInt(prompt("Digite o quarto número:"));
num5 = parseInt(prompt("Digite o quinto número:"));
maior = num1;
menor = num1;
if (num2 > maior) {
    maior = num2;
}
if (num2 < menor) {
    menor = num2;
}

if (num3 > maior) {
    maior = num3;
}
if (num3 < menor) {
    menor = num3;
}

if (num4 > maior) {
    maior = num4;
}
if (num4 < menor) {
    menor = num4;
}

if (num5 > maior) {
    maior = num5;
}
if (num5 < menor) {
    menor = num5;
}
alert("O maior número é: " + maior);
alert("O menor número é: " + menor);
