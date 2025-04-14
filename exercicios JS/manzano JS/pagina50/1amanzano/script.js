let numero;
let contador = 15;

alert("Quadrados de 15 a 200");
alert("");
let inputNumero = prompt("Digite um número de 15 a 200:");
while (contador <= 200) {
    numero = contador * contador;
    alert("O quadrado de " + contador + " é " + numero);
    contador++;
}
