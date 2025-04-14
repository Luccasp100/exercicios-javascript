let soma = 0;
let contador = 0;
let nota = -1;

while (nota >= 0 && nota <= 10) {
    nota = parseFloat(prompt("Digite uma nota entre 0 e 10 (nota inválida para sair):"));
    if (nota >= 0 && nota <= 10) {
        soma += nota;
        contador++;
    }
}
if (contador > 0) {
    let media = soma / contador;
    alert("A média das notas é: " + media.toFixed(2));
} else {
    alert("Nenhuma nota válida foi inserida.");
}
