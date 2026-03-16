/*
  reduce() é um metodo de vetores que REDUZ o vetor a um ÚNICO VALOR.
  Para isso,aplica uma função a cada elemento do vetor, a qual
  efetua uma operação sobre o elemento da vez e acumula o valor em
  um parâmentro a cada passada.O resultado é o valor final do acumulador.
*/

const numeros =[13, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maça', 'uva', 'jabuticaba', 'maracuja']

/*
 Usando reduce() para somar todos os elementos do vetor numeros
 A função de callback do reduce(),em sua forma mais simles,leva dois
 parâmetros:
1º ~> é o acumulador (normalmente nomeado com "acum" ou "acc" ), que
armazena o resultado acumulado das operações efetuadas sobre os
elementos anteriores
2º ~> corresponde ao elemento ("el"  ou "e") que está sendo processado
no momento
*/
const soma = numeros.reduce((acum,el) => acum + el)
console.log('Soma dos núemros: ' , soma)

// De forma semelhante, a multiplicação dos números do vetor
const produto = numeros.reduce ((acc, e) => acc * e)
console.log('Produto dos números:', produto)

console.log('-'. repeat(80))

// Usando reduce() para fazer a concatenação das frutas, mostrando os 
// v
// alores do acumulador e dos elementos da vez a cada passo
const resultado = frutas.reduce((acc, el) => {
  console.log('Acumulador: ${acc}; elemento atual: ${el}')
  return acc.toUpperCase() + ';' + el.toUpperCase()
})
console.log('\n\n' , resultado)