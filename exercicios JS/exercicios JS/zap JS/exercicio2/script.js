let num = parseInt(prompt("Digite um número: "));
let resultado = "";

do {
  resultado += num + " ";
  num--;
} while (num >= 0);
alert(resultado + "Contagem regressiva terminada!");
