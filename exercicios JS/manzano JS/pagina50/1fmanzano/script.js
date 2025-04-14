let numero;
let soma = 0;
let totalValores = 0;
let media;
do {
  numero = parseInt(prompt("Digite um valor numérico:"));

  if (numero >= 0) {
    soma = soma + numero;
    totalValores = totalValores + 1;
  }

} while (numero >= 0);
if (totalValores > 0) {
  media = soma / totalValores;
  alert("O total do somatório é: " + soma +
        "\nA média aritmética é: " + media.toFixed(2) +
        "\nO total de valores lidos é: " + totalValores);
} else {
  alert("Nenhum valor positivo foi lido. Não é possível calcular a média.");
}
