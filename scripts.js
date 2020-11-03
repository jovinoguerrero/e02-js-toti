let nome1 = prompt('Digite o NOME da primeira pessoa:')
let idade1 = Number(prompt('Digite a IDADE da primeira pessoa:'))
let cidade1 = prompt('Digite a CIDADE da primeira pessoa:')
let estado1 = prompt('Digite o ESTADO da primeira pessoa:')
let numSorte1 = Number(prompt('Digite o NÚMERO DA SORTE da primeira pessoa:'))

let pessoa1 = {
  name: nome1,
  age: idade1,
  city: cidade1,
  state: estado1,
  luckyNumber: numSorte1
}
console.table(pessoa1)

let nome2 = prompt('Digite o NOME da segunda pessoa:')
let idade2 = Number(prompt('Digite a IDADE da segunda pessoa:'))
let cidade2 = prompt('Digite a CIDADE da segunda pessoa:')
let estado2 = prompt('Digite o ESTADO da segunda pessoa:')
let numSorte2 = Number(prompt('Digite o NÚMERO DA SORTE da segunda pessoa:'))

let pessoa2 = {
  name: nome2,
  age: idade2,
  city: cidade2,
  state: estado2,
  luckyNumber: numSorte2
}
console.table(pessoa2)

if(pessoa1.age > pessoa2.age){
  console.log(pessoa1.name + ' é maior que ' + pessoa2.name)
} else if (pessoa1.age < pessoa2.age) {
  console.log(pessoa2.name + ' é maior que ' + pessoa1.name)
} else {
  console.log(pessoa1.name + ' e ' + pessoa2.name + ' têm a mesma idade')
}

if(pessoa1.city == pessoa2.city && pessoa1.state == pessoa2.state) {
  console.log(pessoa1.name + ' e ' + pessoa2.name + ' moram na mesma cidade, no mesmo estado')
} else if (pessoa1.city !== pessoa2.city && pessoa1.state == pessoa2.state) {
  console.log(pessoa1.name + ' e ' + pessoa2.name + ' moram em diferentes cidades, mas no mesmo estado')
} else {
  console.log(pessoa1.name + ' e ' + pessoa2.name + ' moram em diferentes cidades e em diferentes estados')
}

if(pessoa1.luckyNumber !== pessoa2.luckyNumber) {
  console.log(pessoa1.name + ' e ' + pessoa2.name + ' têm diferentes números da sorte: ' + pessoa1.luckyNumber + ' y ' + pessoa2.luckyNumber + ', respectivamente.')
} else {
  console.log(pessoa1.name + ' e ' + pessoa2.name + ' têm o mesmo numero da sorte: ' + pessoa1.luckyNumber)
}