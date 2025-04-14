let numero;
numero = parseInt(prompt("Digite um valor inteiro:"));
if (numero < 0) {
    numero = numero * -1;
}
alert("O módulo do número é: " + numero);
