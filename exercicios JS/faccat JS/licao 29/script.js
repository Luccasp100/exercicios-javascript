alert("Soma dos 2 Maiores números");

let numero1 = parseInt(prompt("Digite o primeiro número: "));
let numero2 = parseInt(prompt("Digite o segundo número(não repetir o mesmo valor): "));
let numero3 = parseInt(prompt("Digite o terceiro número(não repetir o mesmo valor): "));
let soma;

if (numero1 > numero2 && numero1 > numero3) {
    soma = numero1 + (numero2 > numero3 ? numero2 : numero3);
} else if (numero2 > numero1 && numero2 > numero3) {
    soma = numero2 + (numero1 > numero3 ? numero1 : numero3);
} else {
    soma = numero3 + (numero1 > numero2 ? numero1 : numero2);
}
alert("A soma dos dois maiores números é: " + soma);
