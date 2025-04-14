let celsius = 10;
let fahrenheit;
let resultado = "";
while (celsius <= 100) {
    fahrenheit = (9 / 5) * celsius + 32;
    resultado += `Celsius: ${celsius.toFixed(1)} -> Fahrenheit: ${fahrenheit.toFixed(1)}\n`;
    celsius += 10;
}
alert(resultado);
