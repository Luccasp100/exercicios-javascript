alert("Desvio condicional encadeado");
let numero = parseInt(prompt("Digite um número: "));
if (numero < 10) {
    alert("Número digitado é menor que 10");
} else if (numero == 10) {
    alert("Número digitado é igual que 10");
} else {
    alert("Número digitado é maior que 10")
}

// cada if é um teste
// cada else é uma escolha 