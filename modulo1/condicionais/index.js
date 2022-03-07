// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//(1.a)O teste verifica se o número digitado tem ou não resto(%)

//(b) Números que não tem resto, ou seja, cujo o resto é igual a 0.

//(c)Números que tem resto.

//(2.a)O código serve para verificar o preço da fruta digitada.

//(b)O preço da fruta maçã é R$2.25 

//(c) O item "Pêra" fica inacessível 

//(3.a) Está pedindo um número e transformando a string inserida pra um number

//(b) 10 => TEORICAMENTE a mensagem seria "esse número passou no teste" -10 => Essa mensagem é secreta

//(c) Haverá um erro, pois não é definido um else para ocasionar a saída caso o número seja menor que 0 e imprima o let mensagem


// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//(1)

let idadeUsuario = prompt("Digite a sua idade")
idadeUsuario = Number(idadeUsuario)

if (idadeUsuario >=18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}


//(2)

let turnoAluno = prompt("Digite seu turno: M para maturtino, V para vespertino e N para noturno.").toUpperCase()

if (turnoAluno === "M") {
    console.log("Bom dia!")

} else if (turnoAluno === "V") {
    console.log("Boa tarde!")

}else {
    console.log("Boa noite!")
}

(3)

let turnoAluno = prompt("Digite seu turno: M para maturtino, V para vespertino e N para noturno.").toUpperCase()

switch (turnoAluno) {
    case "M":  
    console.log("Bom dia!")
    break

    case "V":
    console.log("Boa tarde!")
    break
    
    default:
    console.log("Boa noite!")
    break
}

//(4) 

let generoFilme = confirm("O filme é de fantasia?")
let preçoFilme = confirm("O preço do ingresso é abaixo de 15 reais?")

if (generoFilme && preçoFilme) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(" )
}

//DESAFIOS 

//(1)

let generoFilme = confirm("O filme é de fantasia?")
let preçoFilme = confirm("O preço do ingresso é abaixo de 15 reais?")

if (generoFilme && preçoFilme) {
    let lancheFilme = prompt("Qual lanchinho irá comprar?")
    console.log( `Bom filme! Aproveite seu/sua ${lancheFilme}`)
} else {
    console.log("Escolha outro filme :(" )
}

