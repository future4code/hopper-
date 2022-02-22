// EXERCICIOS DE INTERPRETAÇÃO

// (1)

// a. 10 e 50
// b. nada apareceria

// (2)

// a. A função fará com que a resposta do usuário seja em caixa alta caso encontre "cenoura" no que foi digitado

// b. 
// EU GOSTO DE CENOURA 
// CENOURA É BOM PRA VISTA
// Cenouras crescem na terra

// EXERCICIOS DE ESCRITA DE CÓDIGO

    //(1)
    // a. 
//let infoGeral = ("Eu sou Fernanda, tenho 29 anos, moro em Recife e sou estudante.") 

// const funInfo = (infoGeral) => {

// } 


// console.log(infoGeral)

    //b.
// let saidaUsu = function(parNome, parIdade, parCidade, parProfi)  {
    
//   console.log("Me chamo", parNome, "tenho", parIdade, "moro em ", parCidade, "e sou ", parProfi)

// } 

// saidaUsu("Fernanda", 29,"Recife", "Designer" )


    //(2) a.
// let fNumeros = (umNumero, outroNumero) => {
//     let resultadoNum = umNumero + outroNumero

//     return resultadoNum
// }

// const varPrim = 4
// const varSeg = 6

// console.log(fNumeros(varPrim, varSeg))


    //c.
// let fNumeros = (umNumero, outroNumero) => {
//         let resultadoNum = umNumero + outroNumero
       
//         return resultadoNum
//     }
    
// let MNumeros = (primeiroN, segundoN) => {
//     let maiorNum = primeiroN>=segundoN
    
//     return maiorNum
// }
//     const varPrim = 4
//     const varSeg = 6
    
//     console.log(fNumeros(varPrim, varSeg))
//     console.log(MNumeros(varPrim, varSeg))
    
   //d.
// let imprimaIsso = (mensagem) => { 
//     let tamanhoMensagem = mensagem.length
//    return tamanhoMensagem

// }
// let issoAqui = (letras) => {
//     let letrasGrandonas = letras.toUpperCase()
//     return letrasGrandonas
// }
// let mensagemUsu = prompt("Escreva algo")

// console.log(imprimaIsso(mensagemUsu))
// console.log(issoAqui(mensagemUsu))


    //3
let soMa = (soma1, soma2) => {
    let vamosSomar = soma1 + soma2
    return vamosSomar
}

let subtrAcao = (sub1, sub2) => { 
    let vamosSubs = sub1 - sub2
    return vamosSubs
}
 
let diviSao = (div1, div2) => { 
    let vamosDividir = div1 / div2
    return vamosDividir
}

let multiPlicacao = (mult1, mult2) => {
    let vamosMultiplicar = mult1 * mult2
    return vamosMultiplicar
}

const numIns1 = 30
const numIns2 = 3

console.log("Numeros inseridos:", numIns1, numIns2)
console.log("Soma:", soMa(numIns1, numIns2))
console.log("Diferença:", subtrAcao(numIns1, numIns2))
console.log("Multiplicação:", multiPlicacao(numIns1, numIns2))
console.log("Divisão:", diviSao(numIns1, numIns2))