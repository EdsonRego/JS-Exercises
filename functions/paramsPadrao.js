// estratégia 1 para gerar valor padrao, antes do EcmaScript 2015
function soma1(a,b,c,){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3))
console.log(soma1(0,0,0)) // aqui dá problema, porque ele entende o numero 0 como falso, assim assume o 1

// estratégia 2, 3 e 4 para gerar valor padrao

function soma2(a,b,c,){
    a = a !== undefined ? a : 1     // opcão 2 !== estritamente diferente
    b = 1 in arguments ? b : 1      // opcão 3 , aqui, o número 1 é o indice 1 do array arguments, corresponde ao parametro b
                                    // se fosse para usar no parametro c, ficaria: c = 2  in arguments ? c : 1, pois o indice de c no array arguments vale 2
    c = isNaN(c) ? 1 : c            // opcão 4 , método mais seguro, pois checa se é um número
}

console.log()

// estratégia para gerar valor padrao, a partir do EcmaScript 2015 (es2015)
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3( 0, 0, 0))