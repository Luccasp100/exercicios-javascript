let valor = 1;
let fatorial, num;
let resultado = "";
do {
    if (valor % 2 !== 0) {
        fatorial = 1;
        num = valor;

        while (num > 1) {
            fatorial = fatorial * num;
            num = num - 1;
        }

        resultado += "Fatorial de " + valor + " = " + fatorial + "\n";
    }
    valor = valor + 1;
} while (valor <= 10);
alert(resultado);
