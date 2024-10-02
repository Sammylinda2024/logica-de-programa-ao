// Criar um array vazio para armazenar os números
let numeros = [];

// Solicitar ao usuário que insira 3 números diferentes
for (let i = 0; i < 3; i++) {
    let numero = parseFloat(prompt("Digite um número:"));
    
    // Adicionar o número ao array
    numeros.push(numero);
}

// Exibir o array original
alert("Números digitados: " + numeros);

// Inverter a ordem dos elementos do array usando reverse()
numeros.reverse();

// Exibir o array invertido
alert("Números na ordem inversa: " + numeros);