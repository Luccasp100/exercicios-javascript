let limite = parseInt(prompt("Digite o limite para o cálculo de 3 elevado a N (exemplo: 15): "));
let i, resultado = 1;
for (i = 0; i <= limite; i++) {
    alert("3 elevado a " + i + " é: " + resultado);
    resultado = resultado * 3;
}

