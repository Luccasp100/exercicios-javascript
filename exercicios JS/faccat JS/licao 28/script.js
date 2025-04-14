alert("Maior número");
let numero1 = parseInt(prompt("Digite o primeiro número: "));
let numero2 = parseInt(prompt("Digite o segundo número(não repetir o mesmo valor): "));
let numero3 = parseInt(prompt("Digite o terceiro número(não repetir o mesmo valor): "));

if (numero1 > numero2) {
    alert("o maior número foi " + numero1)
} else if (numero2 > numero3) {
    alert("o maior número foi " + numero2)    
} else {
    alert("o maior número foi " + numero3)
}