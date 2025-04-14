let A;
let B;
let temp;

A = parseInt(prompt("Digite o valor de A:"));
B = parseInt(prompt("Digite o valor de B:"));
temp = A;
A = B;
B = temp;
alert(
  "Após a troca, o valor de A é: " + A + "\n" +
  "Após a troca, o valor de B é: " + B
);
