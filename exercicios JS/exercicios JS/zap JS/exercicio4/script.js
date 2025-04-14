let num = parseInt(prompt("Digite um número para ver a tabuada:"));
let contador = 1;
let resultado = "";
do {
  resultado += num + " x " + contador + " = " + (num * contador) + "\n";
  contador++;
} while (contador <= 10);
alert(resultado);
