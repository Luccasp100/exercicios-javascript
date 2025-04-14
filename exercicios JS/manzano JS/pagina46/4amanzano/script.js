let numero, contador;
numero = parseInt(prompt("Digite um número para calcular a tabuada: "));
contador = 1;
while (contador <= 10) {
    alert(numero + " x " + contador + " = " + (numero * contador));
    contador++;
}
