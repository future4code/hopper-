/*Exercícios de interpretação de código
(1) 
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f . 9


(2)
SUBI NUM ÔNIBUS EM MIRROCOS

Exercicios de escrita

(1)

const emailDoUsuario = prompt("Digite seu email")
console.log("O email " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem vindx "+ emailDoUsuario)


(2)
const comidaFavorita = ["Lasanha", "sushi", "bife", "parmegiana", "camarão"]

//console.log(comidas)

//console.log("Essas são minhas comidas preferidas", comidas)

let comidaPreferida = prompt("Qual sua comida preferida?")

comidaFavorita.splice(1, 1) 
acomidaFavorita.push(comidaPreferida)
console.log(comidaFavorita)

*/

let listaDeTarefas = [null]

let tarefasUsu1 = prompt("Diga 1 tarefa")
let tarefasUsu2 = prompt("Diga 1 tarefa")
let tarefasUsu3 = prompt("Diga 1 tarefa")

listaDeTarefas = [tarefasUsu1, tarefasUsu2, tarefasUsu3]



let tarefaRealizada = prompt("Digite de 0 a 2 qual tarefa realizou")
tarefaRealizada =Number(tarefaRealizada)
listaDeTarefas.splice(tarefaRealizada, 1)

console.log(listaDeTarefas)



