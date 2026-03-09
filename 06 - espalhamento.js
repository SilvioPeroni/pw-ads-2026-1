// Encontrando o menor e o maior números em uma série
let minimo = Math.min(2, -5, 4, 0, 11, -1)
let maximo = Math.max(2, -5, 4, 0, 11, -1)

console.log('Valores minimo e máximo determinados a partir de valores avulsos:')
console.log({minimo, maximo})

console.log('-'.repeat(80))

// E  se os números estivessem em um vetor?
const nums = [2, -5, 4, 0, 11, -1]

/*
  Math.min() e Math.max() não conseguem trabalhar quando 
  os números estão em um vetor
*/
minimo = matchMedia.min(nums)
maximo = Math.max(nums)

console.log('valores mínimo e máximo detreminados a partir de um vetor: ')
console .log({minimo, maximo})

console.log('-' . repeat(80))

/*
  A sintaxe de espalhamento (spreading), representada por ... antes
  do nome de uma variável que contém um vetor ou um objeto, é capaz
  de "desempacotar" um vetor ou objeto em uma série de valores avulsos
*/
minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log('Valores calculados após aplicação do espaçhamento no vetor')
console.log({minimo, maximo})

/* OUTRTOS USOS PARA A SINTAXE  DE ESPALHAMENTO */

const carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor: 'bege'
}

 // "Copiando"  carro1 para Carro2 
 //  const carro2 = carro1    // NÃO FUNCIONA!

 // pARA CRIAR UMA CÓPIA REAL DE UM OBJETO (E NÃO UMA NOVA REFERÊNCIA
//  a ele), podemos usar a sintaxe de espalhamento. Ela "desmonta" o 
// objeto original e, em seguida, "remonta" , mas em uma nova posição
// dememoria.
const carro2 = {...carro1}

 // Mudando o valor das propriedades do carro2
 carro2. modelo = 'Fusca'
 carro2.marca = 'volkswagen'
 carro2.cor = 'preto'
 carro2.ano = 1969

 console.log('-'.repeat(80))

 // Exibindo ambos os carros
 console.log({carro1, carro2})

// exibir ambos os  carros 
console.log ({carro1, carro2})

/* 
PROBLEMA:juntar dois ou mais vetores em um terceiro vetor
*/
  const frutas  =  ['maças' , 'banana' , ' laranja', 'uva' ]
  const verduras = [ 'alface', 'couve', 'rúcula', 'acelga']

  const hortifruti = [...frutas, ...verduras]

  console.log('-' .repeat(80))
  console.log({hortifruti})

  /*
   PROBLEMA: declarar uma função capaz de receber um número arbitrário de parâmentro
   */
  function soma(...nums) {
    // nums é recebido dentro da função como um vetor
    let resultados = 0
    for(let n of nums) resultado += n
    return resultado
  }