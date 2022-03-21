/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const primeiraCarta = comprarCarta()
const segundaCarta = comprarCarta()
const terceiraCarta = comprarCarta()
const quartaCarta = comprarCarta()


console.log("Boas vindas ao jogo Blackjack!")

const mensagemIncioDeJogo = confirm("Deseja iniciar o jogo?")
   if (mensagemIncioDeJogo === false) {
      console.log("O jogo acabou.")    
   } else {
      let cartasUsuarios = (primeiraCarta.valor + segundaCarta.valor)
      let cartasComputador = (terceiraCarta.valor + quartaCarta.valor)

      console.log(`Usuário => cartas: ${primeiraCarta.texto}, ${segundaCarta.texto} | pontuação: ${cartasUsuarios}`)
      console.log(`Computador => cartas: ${terceiraCarta.texto}, ${quartaCarta.texto} | pontuação: ${cartasComputador}`)
      if (cartasComputador > cartasUsuarios) {
         console.log("O computador ganhou!")
      }
      if (cartasComputador < cartasUsuarios) {
         console.log("O usuário ganhou!")
      } 
      if (cartasComputador === cartasUsuarios) {
         console.log("Empate!")
      }
   }