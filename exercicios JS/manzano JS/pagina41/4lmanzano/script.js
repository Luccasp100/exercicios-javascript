let nome, sexo;
nome = prompt("Digite o nome: ");
sexo = prompt("Digite o sexo (M para masculino, F para feminino): ");
if (sexo === "M" || sexo === "m") {
    alert("Ilmo Sr. " + nome);
} else {
    alert("Ilma Sra. " + nome);
}
