alert("Calcular média ponderada");
let nota1 = parseFloat(prompt("Digite a nota 1 do aluno(a): "));
let nota2 = parseFloat(prompt("Digite a nota 2 do aluno(a): "));
let nota3 = parseFloat(prompt("Digite a nota 3 do aluno(a): "));

let total = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
alert("A nota final deste aluno é de: " + total);