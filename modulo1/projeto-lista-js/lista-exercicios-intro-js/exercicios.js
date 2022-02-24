// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

//EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    let alturaR = prompt("insira a altura do retângulo")
    let larguraR = prompt("insira a largura do retângulo")
    alturaR = Number(alturaR)
    larguraR = Number(larguraR)
    const areaRet = alturaR * larguraR
    console.log(areaRet)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Insira o ano que está")
  let anoNasci = prompt("insira o ano de nascimento")
  anoAtual = Number(anoAtual)
  anoNasci = Number(anoNasci)
  const idadeUsuario = anoAtual - anoNasci
  console.log(idadeUsuario)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  let peso1 = prompt("insira seu peso")
  let altura1 = prompt("insira sua altura")
  peso1 = Number(peso1)
  altura1 = Number(altura1)

  return (peso1 / (altura1 * altura1))
   
}



// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsu = prompt("Insira seu nome")
  const idadeUsu = prompt("Insira sua idade")
  const emailUsu = prompt("insira seu email")

  console.log(`Meu nome é ${nomeUsu}, tenho ${idadeUsu} anos, e o meu email é ${emailUsu}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Digite uma cor que você gosta")
const cor2 = prompt("Digite mais uma cor que você goste")
const cor3 = prompt("Digite uma última cor que você goste")
coresFav = [cor1, cor2, cor3]

console.log(coresFav)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const mensUsuario = prompt("Insira uma msg")

  return mensUsuario.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let custoEspec = prompt("insira o custo do espetáculo")
  let valorIng =prompt("insira o valor do ingresso(valor unitário)")
  custoEspec = Number(custoEspec)
  valorIng = Number(valorIng)

  return custoEspec / valorIng

} 

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const frase1 = prompt("insira 1 frase")
  const frase2 = prompt("insira outra frase")

  const str1 = frase1.length
  const str2 = frase2.length

 return str1===str2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 
 return array[0]
  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui


 return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  
return 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let plv1 = string1.length
  let plv2 = string2.length

return (plv1===plv2)
}  
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const queAnoA = prompt("Insira o Ano atual")
  const queAnoN = prompt("Que ano você nasceu?")
  const queAnoRG = prompt("que ano seu RG foi emitido?")
  queAnoA = Number(queAnoA)
  queAnoN = Number(queAnoN)
  queAnoRG = Number(queAnoRG)

  let suaIdade = queAnoA - queAnoN 
  let seuRG = queAnoA - queAnoRG

  
  
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}