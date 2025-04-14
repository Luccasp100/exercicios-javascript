let a = parseInt(prompt("Digite o valor de A:"));
let b = parseInt(prompt("Digite o valor de B:"));
let c = parseInt(prompt("Digite o valor de C:"));

let mensagem = "";
if ((a < b + c) && (b < a + c) && (c < a + b)) {
    if (a === b && b === c) {
        mensagem = "Triângulo Equilátero";
    } else if (a === b || b === c || a === c) {
        mensagem = "Triângulo Isósceles";
    } else {
        mensagem = "Triângulo Escaleno";
    }
} else {
    mensagem = "Não é possível formar um triângulo";
}
alert(mensagem);
