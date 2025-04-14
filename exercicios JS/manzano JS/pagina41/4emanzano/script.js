let A;
let B;
let C;
let delta;
let raiz1;
let raiz2;
A = parseFloat(prompt("Digite o valor de A:"));
B = parseFloat(prompt("Digite o valor de B:"));
C = parseFloat(prompt("Digite o valor de C:"));
if (A === 0) {
    alert("O valor de A não pode ser zero. Não é uma equação de segundo grau!");
} else {
    delta = (B * B) - (4 * A * C);
    if (delta >= 0) {
        raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
        raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
        alert("As raízes da equação são: " + raiz1 + " e " + raiz2);
    } else {
        alert("Não existem raízes reais para essa equação.");
    }
}
