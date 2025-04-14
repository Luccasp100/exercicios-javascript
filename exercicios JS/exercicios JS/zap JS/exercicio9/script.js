let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

alert("Fatorizando...\n");

while (numero >= 1) {
    fatorial *= numero;
    numero--;
}
alert("O fatorial calculado é: " + fatorial);
