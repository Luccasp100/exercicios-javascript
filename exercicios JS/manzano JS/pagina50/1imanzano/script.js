let valor;
let maior = -999999;
let menor = 999999;

do {
  valor = parseInt(prompt("Digite um valor positivo (ou um valor negativo para terminar):"));

  if (valor >= 0) {
    if (valor > maior) {
      maior = valor;
    }
    if (valor < menor) {
      menor = valor;
    }
  }

} while (valor >= 0);

alert("O maior valor informado foi: " + maior + "\nO menor valor informado foi: " + menor);
