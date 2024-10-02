// funçao principal
function caixaDeMercado() {
    let totalGeral = 0;
    let numProdutos = parseInt(prompt("quantos produtos voce esta comprando"));
    let recibo = "";

    //Estrutura de repetiçao para capturar informaçoes de cada produto//

    for( let i = 0; i<numProdutos; i++) {
        let nomeProduto = prompt(`nome do produto ${i + 1}:`);
        let quantidade = parseInt(prompt(`quantidade de ${nomeProduto}:`));
        let valorUnitario = parseFloat(prompt(`valor unitario de ${nomeProduto}:`));

        // calcula o valor total do produto

        let valorTotalProduto = quantidade + valorUnitario;
        totalGeral += valorTotalProduto;

        // Adiciona as onformaçoes ao recibo

        recibo += `${nomeProduto}: ${quantidade} x R$ ${valorUnitario.toFixed(2)} = R$ ${valorTotalProduto.toFixed(2)}\n`;

    
    // Exite o recibo e o total geral
    recibo += `\ntotal geral:R$ ${totalGeral.toFixed(2)}`;
    }
    alert(recibo);
    }

//chama a funçao
caixaDeMercado() ;