Number.prototype.entreda = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entreda(9,10)){
        console.log('Quadro de Honra!')
    }else if (nota.entreda(7,8.99)){
        console.log('Aprovado!')
    }else if(nota.entreda(4,6.99)){
        console.log('Recuperação!')
    }else if(nota.entreda(0,3.99)){
        console.log('Reprovado!')
    }else{
        console.log('Valor Inválido!')
    }

    //console.log('fim')
}

imprimirResultado(9)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)