let N1 = parseFloat(prompt("Digite a nota da primeira verificação (N1):"));
let N2 = parseFloat(prompt("Digite a nota da segunda verificação (N2):"));
let N3 = parseFloat(prompt("Digite a nota da terceira verificação (N3):"));
let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

let mediaAproveitamento = (N1 + N2 * 2 + N3 * 3 + mediaExercicios) / 7;

let conceito = "";
if (mediaAproveitamento >= 9.0) {
    conceito = "A";
} else if (mediaAproveitamento >= 7.5) {
    conceito = "B";
} else if (mediaAproveitamento >= 6.0) {
    conceito = "C";
} else {
    conceito = "D";
}

alert("Média de Aproveitamento: " + mediaAproveitamento.toFixed(2) + "Conceito: " + conceito);
