let valor, maior, menor;
valor = parseInt(prompt("Digite um valor positivo inteiro (ou um valor negativo para terminar):"));

if (valor >= 0) {
    maior = valor;
    menor = valor;
} else {
    alert("Nenhum valor válido foi informado.");
    throw "Encerrando o programa devido à entrada inválida";
}
while (valor >= 0) {
    valor = parseInt(prompt("Digite outro valor positivo inteiro (ou um valor negativo para terminar):"));

    if (valor >= 0) {
        if (valor > maior) {
            maior = valor;
        }
        if (valor < menor) {
            menor = valor;
        }
    }
}
alert("O maior valor informado foi: " + maior);
alert("O menor valor informado foi: " + menor);

