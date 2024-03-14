// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criação de forma literal
function fun1(){}

// Armazenada em uma variável - função anônima é quando não tem nome
const fun2 = function(){}

// Armazenada em um array
const array = [function (a,b){return a + b}, fun1, fun2]
console.log( array[0](2,3) ) // posição 0 do array, passando os valores 2 e 3 para a função

// Armazenada em um atributo de objeto
const objeto = {}
objeto.falar =function(){return 'Opa! - vim de uma função chamada de dentro do objeto obj'}
console.log(objeto.falar())

// Passar função como um parâmentro
function run(funcao){
    funcao()  // invoca e executa o parâmetro recebido, no caso o parâmetro recibido é um função, portanto, aqui sai o comando para executar a função
}
run(  function(){console.log('Executando...')}     )

// Uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
            console.log(a + b + c)
    }
}

soma(2,3)(4)
// ou
const cincoMais = soma(2,3)
cincoMais(4)