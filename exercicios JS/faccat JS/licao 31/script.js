alert("lados de um triângulo");
let a = parseInt(prompt("Digite um dos lados do triângulo(a): "));
let b = parseInt(prompt("Digite um dos lados do triângulo(b): "));
let c = parseInt(prompt("Digite um dos lados do triângulo(c): "));
let total

if (a != b && b != c) {
    alert("esse triângulo é escaleno")
} else if (a == b && b == c) {
    alert("esse triângulo é Equilátero")
} else {
    alert("esse triângulo é Isósceles")   
}