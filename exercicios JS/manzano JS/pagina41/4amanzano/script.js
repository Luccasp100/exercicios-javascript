let valor1;
let valor2;
let maior;
let menor;
let resultado;
valor1 = parseInt(prompt("Digite o primeiro valor:"));
valor2 = parseInt(prompt("Digite o segundo valor:"));
if (valor1 > valor2) {
    maior = valor1;
    menor = valor2;
} else {
    maior = valor2;
    menor = valor1;
}
resultado = maior - menor;
alert("A diferença entre o maior e o menor valor é: " + resultado);
