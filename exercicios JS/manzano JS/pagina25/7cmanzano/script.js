let raio;
let altura;
let volume;
let pii;
pii = 3.14;
raio = parseFloat(prompt("Digite o valor do raio da lata (em centímetros):"));
altura = parseFloat(prompt("Digite o valor da altura da lata (em centímetros):"));
volume = pii * (raio * raio) * altura;

alert("O volume da lata de óleo é: " + volume + " centímetros cúbicos");

