let tempo;
let velocidade;
let distancia;
let litros_usados;
tempo = parseFloat(prompt("Digite o tempo gasto na viagem (em horas):"));
velocidade = parseFloat(prompt("Digite a velocidade média durante a viagem (em km/h):"));

distancia = tempo * velocidade;
litros_usados = distancia / 12;

alert(
  "Velocidade média: " + velocidade + " km/h\n" +
  "Tempo gasto na viagem: " + tempo + " horas\n" +
  "Distância percorrida: " + distancia + " km\n" +
  "Quantidade de litros de combustível usados: " + litros_usados + " litros"
);
