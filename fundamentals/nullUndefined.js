let valor; // não inicializada
console.log(valor)

valor = null;
console.log(valor)// ausencia de valor
//console.log(valor.toString())//Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.0
console.log(produto)

produto.preco = undefined; //evite atribuir undefiened
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)