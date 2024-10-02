/** Para remover um valor do final de um array, podemos utilizar o
método pop:
Temos que deixar a primeira posição livre, deslocando os
elementos para a direita

Removendo um elemento do
final do array
 
 */
let numeros = [0,1,2,3,4,5,6,7,8,9,];
numeros[numeros.length] = 10;

numeros.push(11);
numeros.push(12,13);

Array.prototype.insertfirstposition = function(value){
    for (let i = this.length; i >= 0; i --) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};
numeros.insertfirstposition(-1);

numeros.unshift(-2);
numeros.unshift(-4,-3);

numeros.pop();

console.log(numeros);