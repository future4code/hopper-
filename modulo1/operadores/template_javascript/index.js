/* EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

(1)
a. false
b. false
c. true
d. boolean 

(2)
Não sera impresso a soma pois os dois 
valores saem como string, e é necessário 
fazer a conversão com Number()

(3)
A correção seria ele converter, após perguntar ao usuario:
primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(SegundoNumero)

//EXERCICIOS DE ESCRITA DE CODIGO

(1)
let IdadeUsuario = prompt("Digite sua idade")
let IdadeAmigo = prompt("Qual a idade de melhxr amigx?")

IdadeUsuario = Number(IdadeUsuario)
IdadeAmigo = Number(IdadeAmigo)

console.log("sua idade é maior que a dx melhxr amigx?", IdadeUsuario >IdadeAmigo)
console.log("a diferença de idade é", IdadeAmigo - IdadeUsuario , "ano(s)")

(2)

let NumPar = prompt("Insira um número par")

console.log(NumPar % 2)
// Não haverá resto, será sempre 0
// Se for colocado um número impar, ocorrerá o resto

(3)

let idadeUsu = prompt("Qual a sua idade?")

console.log("Sua idade em meses é ", (idadeUsu *12))
console.log("sua idade em dias é", (idadeUsu * 365))
console.log("sua idade em horas é:", (idadeUsu * 8760))

(4)

let Num1 = prompt("Digite um número")
let Num2 = prompt("Digite outro número")

Num1 = Number(Num1)
Num2 = Number(Num2)

console.log("O primeiro número é maior que o segundo?", Num1 >Num2)
console.log("O primeiro númmero é igual ao segundo?", Num1 ===Num2)
console.log("O primeiro número é divísivel pelo segundo?", Num1%Num2===0)
console.log("O segundo número é divisível pelo primeiro?", Num2%Num1===0) */

//DESAFIOS

/*(1)
a.
let tempF = 77

tempK = (tempF - 32) *(5/9) + 273.12

console.log(tempK, "K" )

b.
tempC = 80

tempF = (tempC)*(9/5) + 32

console.log(tempF,"°F")

c.
tempC = 30

tempF = (tempC)*(9/5) + 32

tempK = (tempF - 32) *(5/9) + 273.12

console.log(tempF, "°F", tempK, "K")

d.
tempC = prompt("Insira sua temperatura em °C")
tempC = Number(tempC)

tempF = (tempC)*(9/5) + 32

tempK = (tempF - 32) *(5/9) + 273.12

console.log(tempF, "°F", tempK, "K") 



(3)

//1 kWh = 0,05

let quiloWatts = prompt("Insira seus QuiloWatts/hora")
quiloWatts = Number(quiloWatts)

a.
let quiloWatts = 280
let valorFinal = (quiloWatts * 0.05)

console.log("O total de QuiloWatts-hora é de", valorFinal, "reais")

b.
let quiloWatts = 280
let valorFinal = (quiloWatts * 0.05)
porcDesc = (valorFinal / 100) * 15
valorFinal = valorFinal - porcDesc

console.log("O total de QuiloWatts-hora é de", valorFinal, "reais")

(3)

// kg=libra/2.2046 | kg=oz/0.0283 
// m= milha/1609.34m |  m= pés/3.280839895 
// l = galão/4.5461 | l= 1/6 xicaras

a.
convLibra = 20

conversaoKg = (convLibra/2.205)
console.log("20lb eqivale a ", conversaoKg, "Kg")

b.
convOz = 10.5

conversaoKg = (convOz*0.0283)
console.log("10.5 oz eqivale a ", conversaoKg, "Kg")


c.
convMilha = 100

conversaoM = (convMilha * 1609.34)
console.log("100 milhas equivale a", conversaoM, "metros")

d.
convPes = 50

conversaoM = (convPes / 3.280839895)
console.log("100 milhas equivale a", conversaoM, "metros")

e.
convGalao = 103.56

conversaoL = (convGalao*3.806)
console.log("103.56gal equivalem a", conversaoL, "litros")

f.
convXic = 450

conversaoL = (convXic/3.5)
console.log("450xic equivalem a", conversaoL, "litros")

g.
convLibra = prompt("Insira o valor em Libras")
convLibra = Number(convLibra)

conversaoKg = (convLibra/2.205)
console.log(convLibra, "lb eqivale a ", conversaoKg, "Kg")

*/