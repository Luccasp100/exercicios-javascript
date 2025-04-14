alert("calculadora média aritmética simples");
let nota1 = parseFloat(prompt("Digite aqui a nota 1 do aluno(a): "));
let nota2 = parseFloat(prompt("Digite aqui a nota 2 do aluno(a): "));
let total = (nota1 + nota2) /2;
if (total >= 6) {
    alert("Aluno(a) Aprovado!!");
} else {
    alert("aluno(a) Reprovado!!");
}
alert("A nota final foi de: " + total);