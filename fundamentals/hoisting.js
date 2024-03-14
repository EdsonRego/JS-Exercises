//Com "var", ocorre o Hoist, o compilador joga a variável para cima, no caso, primeiro ela foi usada e só depois que ela foi declarada
console.log('a =', a)
var a = 2
console.log('a =', a)

//Com let, não ocorre o hoist
console.log('b =', b)
let b = 2
console.log('b =', b)
