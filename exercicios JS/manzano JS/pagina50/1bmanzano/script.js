let pares = 0;
let contador = 1;

alert("Soma dos números pares de 1 a 500");
alert("");
while (contador <= 500) {
    if (contador % 2 === 0) {
        pares += contador;
    }
    contador++;
}
alert("A somatória dos números pares de 1 a 500 é: " + pares);
