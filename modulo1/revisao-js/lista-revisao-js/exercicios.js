// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compare(x, y) {
        if (x > y) return 1
        if (x < y) return -1
    return 0 
    }
return array.sort(compare)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoArray = []

    for (let index = 0; index < array.length; index++) {
        if ((array[index] % 2)=== 0) {
        novoArray.push(array[index])
        }    
    }
    return novoArray
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = []

    for (let index = 0; index < array.length; index++) {
        if ((array[index] % 2)=== 0) {
        novoArray.push((array[index]*array[index]))
        }    
    }
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {    
    return Math.max.apply(null, array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {

        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
        diferenca: Math.max(num1, num2) - Math.min(num1, num2)
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numeroPar = []

    for (let index = 0; numeroPar.length < n; index++) {
        if ((index % 2) === 0) {
            numeroPar.push(index)
        }
    }
    return numeroPar
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let ladosTriangulo = ""

        if (ladoA === ladoB && ladoA === ladoC) {
            ladosTriangulo = "Equilátero"
        }
        else
            if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
                ladosTriangulo = "Isósceles"
        }
            else {
                ladosTriangulo = "Escaleno"
        }
        return ladosTriangulo
} 

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novoArray = array.sort((x, y) => x - y)

return [novoArray[novoArray.length-2], novoArray[1]]
}

// EXERCÍCIO 11
    function retornaChamadaDeFilme(filme) {
    let mensagem = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.` )
return mensagem
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO"
    let novaPessoa = {
        ...pessoa
    }

return novaPessoa
} 

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let arrayAutorizadas = []

    for (const i of pessoas) {
        if (i.idade > 14 && i.idade < 60 && i.altura >= 1.50) {
            arrayAutorizadas.push(i)
        }
        
    }
    return arrayAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let arrayNaoAutorizadas = []

    for (const i of pessoas) {
        if (i.idade <= 14 || i.idade >= 60 || i.altura <= 1.50) {
            arrayNaoAutorizadas.push(i)
        }
        
    }
    return arrayNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.map((conta) => {
        novoValorConta = conta.compras.reduce((acumulo, corrente) =>  acumulo + corrente, 0)
        conta.saldoTotal -= novoValorConta
        conta.compras = []
    })
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((x, y) => x.nome.localeCompare(y.nome))
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((x, y) => {
        x = x.dataDaConsulta.split("/").reverse().join()
        y = y.dataDaConsulta.split("/").reverse().join()
        
        return x.localeCompare(y)
    })
}