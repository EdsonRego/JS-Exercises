// novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000,
  },
}

//Observe que depois de const vem "{ parenteses }" em vez do identificado de variável, 
//portanto aqui os "{ parenteses }" é o símbolo da desestruturação

//lê-se: tire os atributos nome e idade do objeto pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

//lê-se: tire os atributos nome e idade do objeto pessoa, e crie as variáveis "n" e "i", e passe os valores
const { nome: n, idade: i } = pessoa
console.log(n, i)

//lê-se: tire os atributos sobrenome e bemHumorada do objeto pessoa, sendo que ambos não existe.
//Caso não exista o atributo bemHumorada, passe true
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

//lê-se: tire os atributos logradouro, numero e cep do objeto pessoa (observe que cep não existe em pessoa)
const {
  endereco: { logradouro, numero, cep },
} = pessoa
console.log(logradouro, numero, cep)

//Tentando acessar atributos aninhados que não existem em pessoa, dá null e indefined
const {
  conta: { ag, num },
} = pessoa
console.log(ag, num)*/
