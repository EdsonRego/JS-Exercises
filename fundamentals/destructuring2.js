//Observe que depois de const vem "[colchetes]" em vez do identificado de variável, 
//portanto aqui os "[colchetes]" é o símbolo da desestruturação, é usado colchete por que será desestruturado um array


const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//Temos um array com dois elementos.
//o primeiro elemento é "nulo" está vazio.
//o segundo elemento é formado por outro array de dois elementos, onde o primeiro tem valor "nulo" e segundo tem o valor "nota"
const [, [, nota]] = [
  [, 8, 8],
  [9, 6, 8],
]
console.log(nota)
