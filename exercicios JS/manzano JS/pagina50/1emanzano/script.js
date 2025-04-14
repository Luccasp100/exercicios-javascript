let valor = 1;
let numero;
let fatorial;
let soma = 0;
while (valor <= 15) {
  numero = parseInt(prompt("Digite o " + valor + "º valor inteiro: "));
  fatorial = 1;
  let i = 1;
  while (i <= numero) {
    fatorial = fatorial * i;
    i = i + 1;
  }

  soma = soma + fatorial;
  valor = valor + 1;
}
alert("O somatório dos fatoriais é: " + soma);
