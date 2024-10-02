// Solicitar os dois números
const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

// Solicitar o operador
const operador = prompt("Digite o operador (+, -, *, /):");

let resultado;

// Realizar a operação com base no operador
switch (operador) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            alert("Erro: Divisão por zero!");
        }
        break;
    default:
        alert("Operador inválido! Por favor, use +, -, * ou /.");
}

// Exibir o resultado, se válido
if (resultado !== undefined) {
    alert("O resultado da operação é: " + resultado);
}
