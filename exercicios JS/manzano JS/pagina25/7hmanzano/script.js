let comprimento;
let largura;
let altura;
let volume;
comprimento = parseFloat(prompt("Digite o comprimento da caixa (em metros):"));
largura = parseFloat(prompt("Digite a largura da caixa (em metros):"));
altura = parseFloat(prompt("Digite a altura da caixa (em metros):"));
volume = comprimento * largura * altura;
alert("O volume da caixa é: " + volume + " metros cúbicos.");
