let valor;
let taxa;
let tempo;
let prestacao;

valor = parseFloat(prompt("Digite o valor da prestação:"));
taxa = parseFloat(prompt("Digite a taxa de juros por período (em %):"));
tempo = parseFloat(prompt("Digite o número de períodos de atraso:"));
prestacao = valor + (valor * taxa / 100) * tempo;
alert("O valor da prestação em atraso é: " + prestacao);
