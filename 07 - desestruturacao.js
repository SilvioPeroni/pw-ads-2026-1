/*
DESESTRUTURAÇÃO (destructuring) é a operação que torna possivel extrair
valores individuais a partir de vetores e objetos, atribuindo-os a 
variáveis avulsas
*/

const { captureOwnerStack } = require("react");

// 1)  DESESTRUTURAÇÃO DE VETOR
const carros = ['Fusca', 'Cevette', 'Opala'] 

// Desestruturação
const [c1, c2, c3] = carros


/*
sem a desestruturação, seria necessario fazer:
const c1 = carro[0]
const c2 = carro[1]
const c3 = carro[2]
*/

console.log({c1, c2, c3})

// Desestruturação parcial:  1º e 3º elemntos:
const [carro1, , carro3] = carros
console.log({carro1,  , carro3})

// Desestruturação parcial: 1º e 2º elementos
const [K1, K2] = carros
console.log({k1,k2})

//Desestruturação parcial: 2º e 3º elementos
const [ , v2, v3] = carros
console.log({v2, v3})

// PRTOBLEMA: troca de valores de variáveis entre si(swap)
let var1 = 10, var2 = 20
console.log('ANTES:' , {var1, var2})

// Mode classíco de fazer swap ( usando uma variável temporária/auxiliar)
//let aux = var1
//var1 = var2
// var2 = aux

//Seap usando desestruturação
{[var1,var2] = [var2, var1]}
console.log('DEPOIS:', {var1, var2})

 console.log('-' . repeat(80))

 // 2) DESESTRUTURAÇÃO DE OBJETOS

 const pessoa = {
     nome: 'Orkutilson Osório Oliveira',
     sexo: 'M'
     dataNasc: '2010-04-29',
     email: 'orkutilson@gmail.com'
 }

 /*
 Na desestruturação de objetos, as variáveis avulsas:
 ~> DEVEM ter o MESMO das propriedades do objeto que extraem
 ~> Podem ser especificadas em qualquer ordem
 ~> Pode ser feita o desestruturação parcial
 */
const {sexo, nome, xyz,  email} = pessoa

console.log( 'Nome:', nome)
console.log( 'sexo:', sexo)
console.log('E-mail:', email)
console.log('xyz:', xyz)