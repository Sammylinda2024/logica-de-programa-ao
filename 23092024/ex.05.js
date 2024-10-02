// Crie um array de números e some todos os seus valores,
//exibindo o resultado.

let numeros = [2,4,6,8,11,13,14,20,22]

// Inicializo a variavel para armazenar a soma 
let soma = 0;

//uso loop for para somar os valores 
for(i=0; i<numeros.length;i++){
    soma += numeros[i];
}
console.log(soma)
