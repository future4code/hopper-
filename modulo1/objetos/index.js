// ----EXERCÍCIOS DE INTERPRETAÇÃO
//(1)

// Em ordem => "Matheus Nachtergaele", 3, canal: Globo, horario: 14h

//(2)
//(a), Juca, 3, SRD; Juba, 3, SRD; Jubo, 3, SRD

//(b) é uma spread, serve para copiar o objeto citado.

//(3)
//(a) false; undefinied 
//(b) pois a função pede para exibir a propriedade do objeto, logo exibe
//o backender e dá undefinied pra altura, já que esse não existe no objeto.

// ---- EXERCÍCIOS PRÁTICOS

//(1) (a)

// const obj1 = { 
// nome: "Fernanda",
// apelidos: ["Fer", "Nanda", "Nandinha"]

// }

// console.log(`Eu sou ${obj1.nome}, mas pode me chamar de: ${obj1.apelidos[0]}, ${obj1.apelidos[1]} ou ${obj1.apelidos[2]} `)

//(b)

// const obj2 = {
//     ... obj1,
//     apelidos: ["Fefê", "Ferzinha", "Firesoul"] 

// }

// console.log(`Eu sou ${obj2.nome}, mas pode me chamar de: ${obj2.apelidos[0]}, ${obj2.apelidos[1]} ou ${obj2.apelidos[2]} `)

// const pessoa1 = {
//     nome: "João",
//     idade: 30,
//     profissao: "porteiro"

// }

// const pessoa2 = {
//     nome: "Maria",
//     idade: 30,
//     profissao: "jardineira"

//}

// const funcaoPq = (pessoa) => {
//     const chama1 = pessoa.nome
//     const chama2 = pessoa.idade
//     const chama3 = pessoa.profissao
//     const chama4 = pessoa.profissao.length
//     const mensagem = [chama1, chama2, chama3, chama4]
//     return mensagem
// }

// console.log("Retorno: ", funcaoPq(pessoa1))


//(3)

// let carrinho = []

// const fruta1 = {
//     nome: "limão",
//     disponibilidade: true

// }

// const fruta2 = {
//     nome: "morango",
//     disponibilidade: true
    
// }

// const fruta3 = {
//     nome: "banana",
//     disponibilidade: true
    
// }

// const funcFrutas = (f1, f2, f3) => {
//     const recebaF = [f1, f2, f3]
//     return recebaF
// }

// console.log(funcFrutas(fruta1, fruta2, fruta3))





