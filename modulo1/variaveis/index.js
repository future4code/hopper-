// ----------- EXERCÍCIOS DE INTERPRETAÇÃO 

//(1)

//(a) Será impresso no console 3 arrays novos, cada 1 com nome e apelido seguindo a ordem de realocação para o novo array

//(2)

//(a) Será impresso no console um array novo contendo apenas o item "nome" do array anterior

//(3)

//(a) Será impresso no console um novo array contendo todos os apelidos que não forem Chijo


// ----------- EXERCÍCIOS DE ESCRITA


//(1)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //(a) 

//  const nomesDoguinhos = pets.map(function(dog) {
//  return dog.nome
//  })
//  console.log(nomesDoguinhos)

 //(b)

 const racaDoguinhos = pets.filter(rc => rc.raca === "Salsicha" )

console.log(racaDoguinhos)

//(c)

const poodleDoguinhos = pets.filter(function(rc) {
   if (rc.raca === "Poodle"){
       console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${rc.nome}`)
   } 
})


//(3)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //(a)

 const nomeProdutos = produtos.map(apenasNome => apenasNome.nome)

 console.log(nomeProdutos)

//(b)

const precoCincoPorc = produtos.map(porcent =>  [porcent.nome, (porcent.preco - (porcent.preco * 0.05))])

console.log(precoCincoPorc)

//(c)

const bebidasProdutos = produtos.filter(liquidos => liquidos.categoria === "Bebidas")

console.log(bebidasProdutos)

//(d)

const palavraYpe = produtos.map(mapearC => mapearC.nome).filter(acharYpe => acharYpe.includes("Ypê")) 

console.log(palavraYpe)






