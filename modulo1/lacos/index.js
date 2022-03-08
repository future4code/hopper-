// ---- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ----

//(1) O for está somando "valor" + com a variação de i até chegar ao limitante. O resultado chegado é 10.
// let valor = 0
// for(let i = 0; i < 5; i++) { // aqui o valor de "i" muda idependente da variável "valor"
//   valor += i

//(2) (a) Será impresso todo numero maior que 18.

//(b) Não é possível acessar índices com for..of.. apenas com o for.

//(3) "****"

// ---- EXERCÍCIOS DE ESCRITA DE CÓDIGO ----

//(1)
let numPets = prompt("Quantos números de bichinhos de estimação você tem?")
numPets = Number(numPets)
let arrayPet = []


if (numPets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
    
} else  {
    for (let n = 0; n < numPets; n++) {
        nomePet = prompt("Digite o nome do seu bichinho!")
        arrayPet.push(nomePet)
        console.log(`Os nomes dos bichinhos são ${arrayPet}`)
    }
}


//(2)

let arrayOriginal = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

// (a)
function imprimeArray (array) {
    console.log(array)
    
}

arrayOriginal.forEach(imprimeArray)


// (b)
function imprimeArray (array) {
    array = array / 10
    console.log(array)
}
    
    arrayOriginal.forEach(imprimeArray)


//(c)
let arraySecundario = []

function arrayPares(array, array2) {
    
 for (const index of array) {

     if (index % 2 === 0) {
     array2.push(index)
        }
    } return array2 
} 

console.log(arrayPares(arrayOriginal, arraySecundario))

//(d)
let arrayDeStrings = []
function aString (array, array2) {
    for (let index of array) {
        array2.push(`O elemento do índex ${array.indexOf(index)} é: ${index}`)
 }  return array2
}  

console.log(aString(arrayOriginal, arrayDeStrings))

//(e)


let valorMaximo = 5 

function maximoV(array, vm) {
    for (let index = 0; index < array.length; index++) {
        if ( array[index] > vm)
        vm = array[index]
        
    } return vm
    
}

console.log("O valor máximo é: ", maximoV(arrayOriginal, valorMaximo))


let valorMinimo = 5

function minimoM(array, vm) {
    for (let index = 0; index < array.length; index++) {
        if ( array[index] < vm)
        vm = array[index]
        
    } return vm
} 

console.log("O valor minímo é: ", minimoM(arrayOriginal, valorMinimo))