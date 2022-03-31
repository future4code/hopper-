```function calculaNota(ex, p1, p2) {
  let totalNotas = ((p1 * 2) + (p2 * 3) + (ex * 1) / (1 + 2 + 3))
  
  let conceitoFinal = 
  
    if (totalNotas >= 9) {
      conceitoFinal = "A"
    } 
    if (totalNotas < 9 && totalNotas >= 7.5) {
      conceitoFinal = "B"
    } 
    if (totalNotas < 7.5 && totalNotas >= 6) {
      conceitoFinal = "C"
    } 
    else if (totalNotas < 6) {
      conceitoFinal = "D"
    } 
  return console.log(conceitoFinal)```