let nota1;
let nota2;
let nota3;
let nota4;
let media;
nota1 = parseFloat(prompt("Digite a primeira nota:"));
nota2 = parseFloat(prompt("Digite a segunda nota:"));
nota3 = parseFloat(prompt("Digite a terceira nota:"));
nota4 = parseFloat(prompt("Digite a quarta nota:"));
media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 5) {
    alert("Aluno aprovado! Média: " + media);
} else {
    alert("Aluno reprovado! Média: " + media);
}
