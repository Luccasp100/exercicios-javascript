let num;
let soma = 0;
do {
  num = parseInt(prompt("Digite um número positivo (ou um número negativo para sair):"));
  if (num >= 0) {
    soma += num;
  }
} while (num >= 0);
alert("A soma total dos números positivos é: " + soma);
