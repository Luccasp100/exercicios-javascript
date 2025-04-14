alert("mostrar número em ordem crescente");
let numero1 = parseInt(prompt("Digite um número: "));
let numero2 = parseInt(prompt("Digite outro número(não colocar o mesmo número): "));
if (numero1 < numero2) {
    alert("A ordem dos números ficou assim: " + numero1 + ", " + numero2)
} else {
    alert("A ordem dos números ficou assim: " + numero2 + ", " + numero1)
}