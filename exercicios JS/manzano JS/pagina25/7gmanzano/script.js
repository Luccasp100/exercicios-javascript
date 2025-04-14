let A;
let B;
let C;
let D;
A = parseInt(prompt("Digite o valor de A:"));
B = parseInt(prompt("Digite o valor de B:"));
C = parseInt(prompt("Digite o valor de C:"));
D = parseInt(prompt("Digite o valor de D:"));

let resultado = "Somas:\n";
resultado += "A + B = " + (A + B) + "\n";
resultado += "A + C = " + (A + C) + "\n";
resultado += "A + D = " + (A + D) + "\n";
resultado += "B + C = " + (B + C) + "\n";
resultado += "B + D = " + (B + D) + "\n";
resultado += "C + D = " + (C + D) + "\n\n";

resultado += "Multiplicações:\n";
resultado += "A * B = " + (A * B) + "\n";
resultado += "A * C = " + (A * C) + "\n";
resultado += "A * D = " + (A * D) + "\n";
resultado += "B * C = " + (B * C) + "\n";
resultado += "B * D = " + (B * D) + "\n";
resultado += "C * D = " + (C * D);
alert(resultado);
