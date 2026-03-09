/*   O método de vetores find() encontro o PRIMEIRO ELEMENTO
que corresponda ao retorno de uma função passada como
parâmentro.
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maça', 'uva', 'jabuticaba', 'maracuja']

//Econtrando o primeiro número negativo no vetor de números
console.log(: ',Primeiro número negativo:', numeros.find(n => n< 0))

// Encontrando o primeiro número múltiplo de 5
console.log('Primeiro multiplo de 5',
    numeros.find(x => x % 5 === 0)
)

// Encontrando o primeiro número maior que 20
console.log('Primeiro número maior que 20:', 
    numeros.find(i => i > 20)
)
