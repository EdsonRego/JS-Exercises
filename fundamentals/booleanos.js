let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//Usando duas vezes o sinal de exclamação para saber se algo é verdadeiro o false, ou seja, negando duas vezes o algo
isAtivo = 1
console.log(!!isAtivo)

console.log('Exemplos de verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
