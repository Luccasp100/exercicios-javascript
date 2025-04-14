let t1 = 1, t2 = 1, t3;
let resultado = t1 + " " + t2 + " ";
for (let i = 3; i <= 15; i++) {
    t3 = t1 + t2;
    resultado += t3 + " ";
    t1 = t2;
    t2 = t3;
}
alert("Sequência de Fibonacci: " + resultado);
