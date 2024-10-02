/**Removendo um elemento da
primeira posição
 */

for (let i = 0; i < numeros.length; i++){
    numeros[i] = numeros[i+1]
}

console.log(numeros);
