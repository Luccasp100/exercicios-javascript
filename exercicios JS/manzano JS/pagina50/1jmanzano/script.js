let dividendo = parseInt(prompt("Digite o dividendo:"));
let divisor = parseInt(prompt("Digite o divisor:"));
let quociente = 0;
let resto = dividendo;
if (divisor === 0) {
  alert("Erro: Divisão por zero não é permitida.");
} else {
  while (resto >= divisor) {
    resto = resto - divisor;
    quociente = quociente + 1;
  }

  alert("O quociente da divisão é: " + quociente + "\nO restante da divisão é: " + resto);
}
