let A;
let B;
let C;
let temp;
A = parseInt(prompt("Digite o valor de A:"));
B = parseInt(prompt("Digite o valor de B:"));
C = parseInt(prompt("Digite o valor de C:"));
if (A > B) {
    temp = A;
    A = B;
    B = temp;
}
if (B > C) {
    temp = B;
    B = C;
    C = temp;
}
if (A > B) {
    temp = A;
    A = B;
    B = temp;
}
alert("Os valores em ordem crescente são: " + A + ", " + B + " e " + C);
